
(function () {


//Inicializar Firebase
  const config = {
	 apiKey: "AIzaSyBdqA5PBFxmvOhS9SzEUi6yjaaglC41mmg",
    authDomain: "rev-1524.firebaseapp.com",
    databaseURL: "https://rev-1524.firebaseio.com",
    projectId: "rev-1524",
    storageBucket: "rev-1524.appspot.com",
    messagingSenderId: "222230256546"

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
  //btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    //const email = txtEmail.value;
    //const pass = txtPassword.value;
    //const auth = firebase.auth();

    // Sign in
    //const promise = auth.createUserWithEmailAndPassword(email, pass);
    //promise.catch(e => console.log(e.message));
    //promise.catch(e => error.innerHTML = e.message); 
  //});

  
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
       window.location.href = "home.html";
    };  
  //aqui no se obtuvo un inicio de sesión  
    } else {
      console.log('no logueado');
      console.log(firebaseUser.emailVerified);
    }    
  });
} ());