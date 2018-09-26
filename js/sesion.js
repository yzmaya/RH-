(function() {

//Inicializar Firebase
  var config = {
   apiKey: "AIzaSyBOylNl-Ka7T5yo5EWl2KMaIqXu4cuj4fg",
    authDomain: "vue-test-e6acb.firebaseapp.com",
    databaseURL: "https://vue-test-e6acb.firebaseio.com",
    projectId: "vue-test-e6acb",
    storageBucket: "vue-test-e6acb.appspot.com",
    messagingSenderId: "920258140742"
  };
  firebase.initializeApp(config);

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