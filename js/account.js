 //global var
/* let fullName,email,password,confirmpassword;

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
  }else{
// end of realtime database
         // start of creating user with email and password
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
   
     firebase.auth().createUserWithEmailAndPassword(email, password);
     window.location.href='dashboard.html';
     
  })
  // catch auth error
   .catch((error) => {
    alert(error.message);
    // ..
  });

// end of creating user with email and password
  }

  } );

      }else{
        alert('password mismatch');
      }
     }


})
*/

// signup new users
 let btnregister = document.getElementById('btnregister');
btnregister.addEventListener('click', () =>{
    // body...
    btnregister.innerHTML = 'Please wait ...';
     fullName = document.getElementById('txtfullname').value.toUpperCase();
   email = document.getElementById('txtuseremail').value;
   password = document.getElementById('txtpassword').value;
   confirmpassword = document.getElementById('txtconfirmpassword').value;

   if (fullName  == "" || email == "" || password == "" || confirmpassword == "") {
      alert('fill all details correctly');
      btnregister.innerHTML = 'Register Now';
    }else{
       if (password == confirmpassword ) {
      // add data to realtime database
      indexedEmail = email.replace(".", "@");
      //console.log(signupEmail);

firebase.database().ref('studentusers/' + indexedEmail).set({

      FirstName: fullName,
      Email: email

    },  (error) => {
  if (error) {
    // The write failed...
     alert('Registration Faled');
     btnregister.innerHTML = 'Register Now';
  } else {
    // Data saved successfully!
    function createUser(argument) {
       alert('successfully created account');

       firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
   
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().createUserWithEmailAndPassword(email, password);
    
    
  })


  .catch((error) => {
    console.log(error);
    alert(error.message);
    btnregister.innerHTML = 'Register Now';
    // ..
  });
    }

    if (createUser()) {
      window.location.href='dashboard.html';
      btnregister.innerHTML = 'Register Now';
    }else{
      
    }
  }
} );

      // end of realtime database


        
      }else{
        alert('password do not match');
        btnregister.innerHTML = 'Register Now';
      }
      
    }
   
 })