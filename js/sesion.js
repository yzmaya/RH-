(function() {

//Inicializar Firebase
  var config = {
     apiKey: "AIzaSyBdqA5PBFxmvOhS9SzEUi6yjaaglC41mmg",
    authDomain: "rev-1524.firebaseapp.com",
    databaseURL: "https://rev-1524.firebaseio.com",
    projectId: "rev-1524",
    storageBucket: "rev-1524.appspot.com",
    messagingSenderId: "222230256546"
  };
  firebase.initializeApp(config);

  var chicas = firebase.database().ref('confirmados/');


chicas.on('child_added', function(data) {
  var llave = data.key;
  var nombre = data.val().cargo;
  var curso = data.val().correo;
  var correo = data.val().nombre;
  var ver = data.val().display;
 
  $('#lista').prepend("<tr style=display:" + ver +  ";><td>" +  nombre + "</td><td>" + curso + "</td><td>" + correo + "</td><td><input type='file' value='upload' id='"+ llave + "' accept='application/pdf' onclick=enableSending('" + llave + "')></td></tr>");
});


  // Obtener elementos
  const btnLogout = document.getElementById('btnLogout');


//funcion al boton para cerrar la sesión
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      //solo muestro en consola los datos de conexión
      console.log(firebaseUser);

      console.log(firebaseUser.emailVerified);   
      
    } else {
      // si ya no tengo una sesión regresa a index
      console.log('no logueado');
      window.location.href = 'index.html';
    }    
  });
}());