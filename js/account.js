
 //global var
let fullName,email,password,confirmpassword;

// signup new users
let btnregister = document.getElementById('btnregister');
btnregister.addEventListener('click', () =>{
  btnregister.value ="Please wait...";
 fullName = document.getElementById('txtfullname').value.toUpperCase();
   email = document.getElementById('txtuseremail').value;
   password = document.getElementById('txtpassword').value;
   confirmpassword = document.getElementById('txtconfirmpassword').value;

     if(fullName  == "" || email == "" || password == "" || confirmpassword == ""){
      alert('Fill all your details');
      btnregister.value ="Register now";
     }else{
      if (password == confirmpassword) {
          let indexedemail = email.replace(".", "@");
// inert user details to reatime database

firebase.database().ref('famerusers/' + indexedemail).set({

      FullName: fullName,
      Email: email

    },  (error) => {
  if (error) {
    // The write failed...
     alert('Registration Faled');
     btnregister.value ="Register now";
  }else{
// end of realtime database
         // start of creating user with email and password
       firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if (user) {
      window.location.href='dashboard.html';
    }else{
     //window.location.href='auth.html';
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    })


  .catch((error) => {
    console.log(error);
    alert(error.message);
    btnsignupnewuser.innerHTML = 'Register Now';
    // ..
  });
// end of creating user with email and password
  }

  } );

      }else{
        alert('password mismatch');
        btnregister.value ="Register now";
      }
     }


})



