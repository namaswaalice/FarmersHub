var email;
  let usernamedisplay = document.getElementById('usernamedisplay');
   
auth.onAuthStateChanged(function(user){
      if(user){
          email = user.email;
        //alert("Active user" + email);
        // console.log(email);
         usernamedisplay.value = email + " ";
         
      }else{
        //alert("No Active user");
        window.location.href='auth.html';
      }
    })


addedusercrops = document.getElementById('addedusercrops');
btnusercrops = document.getElementById('cmbusercrops');
btnusercrops.addEventListener('change', () =>{
	let newcrops = btnusercrops.options[btnusercrops.selectedIndex].value;
	addedusercrops.value += newcrops + ",";
})


btnupdateprofile = document.getElementById('btnupdateprofile');
btnupdateprofile.addEventListener('click', () =>{
	btnupdateprofile.innerHTML = "Updating ....";
	 txtuserphone = document.getElementById('txtuserphone').value;
     cmbuserregion = document.getElementById('cmbuserregion');
     cmbusercountry = document.getElementById('cmbusercountry');
     addedusercrops = document.getElementById('addedusercrops').value;
     let countname = cmbusercountry.options[cmbusercountry.selectedIndex].value;
     let regionname = cmbuserregion.options[cmbuserregion.selectedIndex].value;
     let indexedEmail = email.replace(".", "@");
     firebase.database().ref('famerusers/' + indexedEmail).update({

    Phone: txtuserphone,
      Region: regionname,
      County: countname,
      Crops: cmbusercrops
      }).then(() => {
  // Data saved successfully!
  btnupdateprofile.innerHTML = "Update successfully";
})
.catch((error) => {
  btnupdateprofile.innerHTML = "Update failed Retry";
});
})



/// display user details
displayUserDetails();

function displayUserDetails() {
	// body...
let fullname =	localStorage.getItem('FullName');
 let phone =      localStorage.getItem('Phone' );
 let  region =     localStorage.getItem('Region');
 let  county =     localStorage.getItem('County');
 let locationholder = document.getElementById('locationholder');
 let txtuserphone = document.getElementById('txtuserphone');
 let txtuserfullname = document.getElementById('txtuserfullname');
  locationholder.innerHTML = region + "/" + county;
txtuserphone.value = phone;
txtuserfullname = fullname;

}

let signOutnow = document.getElementById('btnlogout');
signOutnow.addEventListener('click' , () =>{
   localStorage.clear();
        auth.signOut();
      alert("signed out");
})