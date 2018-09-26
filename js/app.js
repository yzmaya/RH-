
(function () {


//Inicializar Firebase
  const config = {
	    apiKey: "AIzaSyBOylNl-Ka7T5yo5EWl2KMaIqXu4cuj4fg",
    authDomain: "vue-test-e6acb.firebaseapp.com",
    databaseURL: "https://vue-test-e6acb.firebaseio.com",
    projectId: "vue-test-e6acb",
    storageBucket: "vue-test-e6acb.appspot.com",
    messagingSenderId: "920258140742"
  };
  firebase.initializeApp(config);

  // Obtener elementos
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  const error = document.getElementById('demo');
  const prevencion = document.getElementById('demo2');

  // Añadir Evento login
  btnLogin.addEventListener('click', e => {
    //Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message)); 
    promise.catch(e => error.innerHTML = e.message); 
     
  });

  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    promise.catch(e => error.innerHTML = e.message); 
  });

  
// Añadir un listener en tiempo real
   firebase.auth().onAuthStateChanged( firebaseUser => {
//Si existe autenticación hacer.....
    if(firebaseUser) {
      console.log(firebaseUser);
//Si ya comprobe por medio del correo de validación entonces .. ..
 if(firebaseUser.emailVerified == true){
      window.location.href = "home.html";
    }else{
//si ya te registraste pero no se ha comprobado tu dirección de correo entonces...
       firebaseUser.sendEmailVerification().then(function() {
          // Email sent.
          alert('se ha enviado una confirmación a tu correo electrónico');
          error.innerHTML = "";
          prevencion.innerHTML = "Una vez hayas verificado actualiza tu navegador web (F5)";
        }).catch(function(error) {
          // An error happened.
        });
    };  
  //aqui no se obtuvo un inicio de sesión  
    } else {
      console.log('no logueado');
      console.log(firebaseUser.emailVerified);
    }    
  });
} ());