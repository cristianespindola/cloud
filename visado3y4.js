function User(nombreYApellido, nickname, fecha){
 this.nombreYApellido = nombreYApellido;
 this.nickname = nickname;
 this.fechaDeNacimiento = new Date(fecha);
 this.posts = [];
 this.users = [];
}

User.prototype.getNombreYApellido=function(){
  return this.nombreYApellido;
}

User.prototype.getNickname=function(){
  return this.nickname;
}


User.prototype.toJSON=function(){
  
  return {
        'nombreYApellido' : this.nombreYApellido,
                        'nickname' : this.nickname,
                        'fechaDeNacimiento' : this.fechaDeNacimiento,
                        'posts' : this.posts.map((p)=>{ return p.contenido}),
                        'users' : this.users.map((u)=>{
                                   return u.nickname})
  }
  
  
  
}

function Post(contenido){
  this.contenido = contenido;
  this.fechaYHora = new Date();
  this.user = null;
  this.comments = [];
  this.userMencionados = [];
}

Post.prototype.setFechaYHora=function(aFechaYHora){
  this.fechaYHora = aFechaYHora;
}

Post.prototype.setUser=function(aUser){
  this.user = aUser;  
}

Post.prototype.setComments=function(aComments){
  this.comments = aComments;
}
Post.prototype.setUserMencionados=function(aUserMen){
  this.userMencionados = aUserMen;
}

User.prototype.post=function(contenido){
  let post = new Post(contenido);
  this.posts.push(post);
  post.user= this.nickname;
  console.log(this.getNickname() +' Posteo ' +post.contenido +' El '  +post.fechaYHora);
  this.users.map((user) => user.postDoneBy(this, post));
}


User.prototype.getPosts=function(){
  return this.posts;  
}

Post.prototype.getUser=function(){
  return this.user;  
}

User.prototype.getUsers=function(){
  return this.users;
}

User.prototype.agregarUser=function(aUser){
  this.users.push(aUser);
}


User.prototype.eliminarUser=function(aUser){
  this.users.splice(this.users.indexOf(aUser), 1);
}


User.prototype.postDoneBy=function(aUser,aPost){
  console.log(`recibio notificacion de posteo:` +' ' +aPost.contenido +` De: `+aUser.nickname);  
}

User.prototype.commented=function(aUser, aPost, aCommented){
  
}
 function Commented(comentario, post, fechaYHora, user)
 {
   this.comentario = comentario;
   this.post = post;
   this.fechaYHora = fechaYHora;
   this.user = user;
 };
 
User.prototype.comentar=function(comment, post, fechaYHora, usuario){
  if(comment.length <= 100){
    let commented = new Commented(comment, post, fechaYHora, usuario);
      let aUser = post.user;
      aUser.postHasBeenCommentedBy(post, commented);
  } 
  else {
      this.levantarExcepcion(comment);
    }
};

User.prototype.postHasBeenCommentedBy=function(post, commented){
  post.comments.push(commented);
  console.log('El usuario ' +commented.user.getNickname() +' comento el siguiente post' +post);
  
};

function ErrorPorDemaciadoCaracter(string) {
this.name = "ErrorPorDemaciadoCaracter";
this.message = "error el comentario sobrepaso los caracteres permitidos";
}

ErrorPorDemaciadoCaracter.prototype = new Error();
ErrorPorDemaciadoCaracter.prototype.constructor =
ErrorPorDemaciadoCaracter;

User.prototype.levantarExcepcion=function(comment){
  try{
    if(comment.length >= 100){
      throw new ErrorPorDemaciadoCaracter();
    }
  } catch(e)
  {
    console.log(e);
  }
};



function RedSocial(){
  this.users = [];
}

RedSocial.prototype.addUser=function(aUser){
  this.users.push(aUser);
}


RedSocial.prototype.exportar=function(){
  let json = JSON.stringify(this.users);
  return json;
}

Post.prototype.withUsers=function(){
    let listUsers = this.comments.map((comenentd) => (comenentd.user));
    return listUsers.length;
}

RedSocial.prototype.importar=function(){
  let json = this.exportar();
  let obj = JSON.parse(json);
  let r =  obj.map((m)=>(m.posts));
  return r
}

function resolver(key,value){
  
  if(key === 'posts'){
    let e = [];
    return value
  }else{
    return null
  }
}

let pepe = new User(`Pepe`,`Pepe`,`1991-10-10`);
let n = new User(`n`, `n`, `1995-11-11`);
let juan = new User('Juan', 'juan', '1991-10-28');

//juan.agregarUser(juan);
juan.agregarUser(pepe);
juan.agregarUser(n);
let p = new Post('hola');
//p.setUser(juan);
juan.post('Mi primir Post');
//console.log(juan.post('Mi primir Post'));
//let comen = new Commented('comenta', juan.posts[0],'1991-10-25', pepe);
//console.log(comen);
//console.log('hola como estas'.length);

//juan.eliminarUser(pepe);
//console.log(juan.getUsers());


//console.log(pepe.comentar('primer comentario',juan.posts[0],'1992-12-12', pepe));

//console.log(n.comentar('primer comentario',p,'1992-12-12', pepe));
//console.log(p);
//console.log(juan);
let redSocial = new RedSocial();
redSocial.addUser(juan);
redSocial.addUser(pepe);
redSocial.addUser(n);
 console.log(redSocial.exportar());
 console.log(redSocial.importar());
redSocial.exportar();
redSocial.importar();
//console.log(p.withUsers());
//console.log(p);
//console.log(JSON.stringify(p));