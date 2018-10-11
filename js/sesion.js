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

 

  var chicas = firebase.database().ref('meta/');


chicas.on('child_added', function(data) {
 var llave = data.key;
  var nombre = data.val().NOMBRE;
  var apaterno = data.val().APELLIDO_PATERNO;
  var amaterno = data.val().APELLIDO_MATERNO;
  var puesto = data.val().DENOMINACION;
  var horario = data.val().HORARIO;
  

 $('#lista').prepend("<tr data-toggle='modal' data-target='#myModal' id='" + llave + "'  onclick=enableSending('" + llave + "')><td>" + nombre + " " + apaterno + " " + amaterno   + "</td><td>" + puesto + "</td><td>" + horario + "</td></tr>");

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