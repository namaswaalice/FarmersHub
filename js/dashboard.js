
   let usernamedisplay = document.getElementById('usernamedisplay');

   
auth.onAuthStateChanged(function(user){
      if(user){
         var email = user.email;
        //alert("Active user" + email);
        // console.log(email);
         usernamedisplay.innerHTML = email + " ";
         let indexedemail = email.replace(".", "@");
         getAllUserData(indexedemail);
      }else{
        //alert("No Active user");
        window.location.href='auth.html';
      }
    })

// get all user data

function getAllUserData(email) {
    // body...
     firebase.database().ref('famerusers/' + email).on('value',function(snapshot){
    try{
        let fullname,phone,region,county;
 
      fullname = snapshot.val().FullName;
      phone = snapshot.val().Phone;
      region = snapshot.val().Region;
      county = snapshot.val().County;
   
      localStorage.setItem('FullName',fullname );
      localStorage.setItem('Phone',phone );
      localStorage.setItem('Region',region );
      localStorage.setItem('County',county );
    
      

      
  }catch(err){
    //alert(typeof err);
    console.log(err.message);
 
  } 

})
}

let signOutnow = document.getElementById('btnlogout');
//// / sign out user

signOutnow.addEventListener('click' , () =>{
   localStorage.clear();
        auth.signOut();
      alert("signed out");
})