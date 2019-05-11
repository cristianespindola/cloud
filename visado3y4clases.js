
class User{
  constructor(nombreYApellido, nickname, fecha){
    this.nombreYApellido = nombreYApellido;
    this.nickname = nickname;
    this.fechaDeNacimiento = new Date(fecha);
    this.posts = [];
    this.users = [];
  };
  
  getNombreYApellido(){
    return this.nombreYApellido;
  };
  
  getNickname(){
    return this.nickname;
  };
  
  post(contenido, AUsersMencionados){
    let post = new Post(contenido,AUsersMencionados);
    this.posts.push(post);
    post.user = this;
    console.log(this.getNickname() +' Posteo ' +post.contenido +' El '  +post.fechaYHora);
    this.users.map((user) => user.postDoneBy(this, post));
  };
  
  getPosts(){
    return this.post;  
  };
  
  agergarUser(aUser){
    this.users.push(aUser);
  };
  
  getUsers(){
    return this.users;  
  };
  
  eliminarUser(aUser){
    this.users.splice(this.users.indexOf(aUser), 1);
  };
  
  postDoneBy(aUser, aPost){
     console.log(`recibio notificacion de posteo:` +' ' +aPost.contenido +` De: `+aUser.nickname); 
  };
  
  comentar(comment, post, fechaYHora, usuario){
    if(comment.length <= 100){
      let commented = new Commented(comment, post, fechaYHora, usuario);
      let aUser = post.user;
      aUser.postHasBeenCommentedBy(post, commented);
  } 
   else {
      this.levantarExcepcion(comment);
    }
  };
  
  postHasBeenCommentedBy(post, commented){
    post.comments.push(commented);
    console.log('El usuario ' +commented.user.getNickname() +' comento el siguiente post' +post);
  };
  
  levantarExcepcion(comment){
    throw new ErrorPorDemaciadoCaracter();
  }
  
  toJSON(){
  
  return {
        'nombreYApellido' : this.nombreYApellido,
                        'nickname' : this.nickname,
                        'fechaDeNacimiento' : this.fechaDeNacimiento,
                        'posts' : this.posts.map((p)=>{ return p.contenido}),
                        'users' : this.users.map((u)=>{
                                   return u.nickname})
  }
};
  
  agregarPost(post){
    this.posts.push(post);
  }
}

class Post{
  constructor(contenido,usersMencionados){
    this.contenido = contenido;
    this.fechaYHora = new Date();
    this.comments = [];
    this.user = null;
    this.usersMencionados = usersMencionados;
  }
  
  getUsers(){
    return this.user;
  };
 
  setUser(aUser){
    this.user = aUser;  
};

  withUsers(){
    return this.usersMencionados;    
  };

};

class Commented{
  constructor(comentario, post, fechaYHora, user){
    this.comentario = comentario;
    this.post = post;
    this.fechaYHora = fechaYHora;
    this.user = user;
  }
};
function ErrorPorDemaciadoCaracter(string) {
this.name = "ErrorPorDemaciadoCaracter";
this.message = "error el comentario sobrepaso los caracteres permitidos";
}

ErrorPorDemaciadoCaracter.prototype = new Error();
ErrorPorDemaciadoCaracter.prototype.constructor =
ErrorPorDemaciadoCaracter;

class RedSocial{
  constructor(){
    this.users = [];
  }
  
  addUser(aUser){
    this.users.push(aUser);
  }
  
  exportar(){
    let json = JSON.stringify(this.users);
    return json;
  }

  importar(aJson){
    let obj = JSON.parse(aJson);
    let post = new Post(obj.contenido);
    post.fechaYHora = obj.fechaYHora;
    let userDelPost = this.users.filter((u)=> obj.user === u.nickname)[0];
    if(userDelPost !== undefined){
      let usersMencionados = this.users.filter((u)=> obj.usersMencionados.includes(u.nickname));
      post.user = userDelPost;
      userDelPost.agregarPost(post);
      post.usersMencionados = usersMencionados;
      return  post;
      }
      else{
        this.levantarExcepcionPorUsuarioInvalido(aJson);
      }
  };
  
  levantarExcepcionPorUsuarioInvalido(aJson){
    throw new ErrorPorUsuarioInvalido(aJson);
  }

};


function ErrorPorUsuarioInvalido(aJson) {
this.name = "ErrorPorUsuarioInvalido";
this.message = "error useario json es invalido" +aJson;
}

ErrorPorUsuarioInvalido.prototype = new Error();
ErrorPorUsuarioInvalido.prototype.constructor =
ErrorPorDemaciadoCaracter;


let pepe = new User('Pepe Lopez', 'pepe', '1991-10-28');
//console.log(pepe.getNombreYApellido());
//console.log(pepe.getNickname());

let juan = new User('Juan Lopez', 'juan', '1990-11-03');
let nick = new User('Nick Perez', 'nick', '1991-05-05'); 

juan.agergarUser(pepe);
juan.agergarUser(nick);
let redSocial = new RedSocial();
redSocial.addUser(juan);
redSocial.addUser(pepe);
redSocial.addUser(nick);

/*console.log('exportar usuarios');
console.log(redSocial.exportar());
console.log('usuarios mencionados');
juan.post('Hola',[pepe]);
console.log(juan.posts[0].withUsers());
console.log('importar usuario valido');
console.log(redSocial.importar('{"contenido":"mi segundo post","fechaYHora":"1992-12-12","user":"pepe","usersMencionados":"[pepe]"}'));
console.log('importar usuario invalido');
console.log(redSocial.importar('{"contenido":"","fechaYHora":"1992-12-12","user":"","usersMencionados":"[pepe, nick]"}'));
*/