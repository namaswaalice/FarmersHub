
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
      Email: email,
      Phone: "",
      Region: "",
      County: "",
      Crops: ""

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


 let username , userpassword;

 let btnlogin = document.getElementById('btnlogin');
 btnlogin.addEventListener('click', () =>{
  btnlogin.value ="Please wait...";
username = document.getElementById('txtusername').value;
password = document.getElementById('txtuserpassword').value;
if(username  == "" || password == ""){
      alert('Fill all your details');
      btnlogin.value ="Login now";
     }else{
        // start of creating user with email and password
       firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {

firebase.auth().signInWithEmailAndPassword(username, password)
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
    console.log(errorMessage);
    // ..
 let Wrongpassworderror = 'The password is invalid or the user does not have a password.';
    let nousererror = 'There is no user record corresponding to this identifier. The user may have been deleted.';
    let temporary = 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
    if (error.message == nousererror) {
      seconds = 2;
      //alert('No such user please register');
      alert("Error The user does not exits");
      btnlogin.value ="Login now";
    }else if(error.message == Wrongpassworderror){
      //alert('Wrong password');
      seconds = 2;
      alert("Error You entered wrong password");
      btnlogin.value ="Login now";
     // console.log(seconds);
    }else if(error.message == temporary){
      seconds = 2;
      // alert('An error occured');
       alert("Account disabled due to may wrong login attempts");
       btnlogin.value ="Login now";

    }
    else{
      seconds = 2;
      // alert('An error occured');
       alert("An error occoured  Conduct admin for help");
       btnlogin.value ="Login now";

    }
    btnlogin.value ="Login now";


  });

    })


  .catch((error) => {
    console.log(error);
    alert(error.message);
    btnlogin.innerHTML = 'Login Now';
    // ..
 

  });
     }

 })

 // login existing user

