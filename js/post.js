let postid ;
var email;
  let usernamedisplaypost = document.getElementById('usernamedisplaypost');
   
auth.onAuthStateChanged(function(user){
      if(user){
          email = user.email;
          postid = user.uid;
          localStorage.setItem("userID", postid)
        //alert("Active user" + email);
        // console.log(email);
         usernamedisplaypost.innerHTML = email + " ";
         
      }else{
        //alert("No Active user");
        window.location.href='auth.html';
      }
    })




let pasteform = document.getElementById('pasteform');
let disease = document.getElementById('diseaseform');
let postforms = document.getElementById('postform');
let callpaste = document.getElementById('callpaste');
let calldisease = document.getElementById('calldisease');
let callposts = document.getElementById('callpost');
let uploadpaste = document.getElementById('uploadpaste');
let uploaddisease = document.getElementById('uploaddisease');

callpaste.addEventListener('click', () =>{
	pasteform.style.display = "block";
	disease.style.display = "none";
	postforms.style.display = "none";
	callpaste.classList.add("sub-nav-active");
	calldisease.classList.remove("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
	localStorage.setItem("formCode", "2");
})
calldisease.addEventListener('click', () =>{
	pasteform.style.display = "none";
	disease.style.display = "block";
	postforms.style.display = "none";
	calldisease.classList.add("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
	localStorage.setItem("formCode", "3");
})
callposts.addEventListener('click', () =>{
	postforms.style.display = "block";
	disease.style.display = "none";
	pasteform.style.display = "none";
	callposts.classList.add("sub-nav-active");
	calldisease.classList.remove("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
	localStorage.setItem("formCode", "1");
})
uploadpaste.addEventListener('click', () =>{
	alert('upload paste coming soon');
	
})
uploaddisease.addEventListener('click', () =>{
	alert('upload disease coming soon');
	
})

retainPageState();
function retainPageState() {
	// body...
let formNumber = localStorage.getItem("formCode");
if (formNumber == 2) {
    pasteform.style.display = "block";
	disease.style.display = "none";
	postforms.style.display = "none";
	callpaste.classList.add("sub-nav-active");
	calldisease.classList.remove("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
}else if(formNumber == 3){
    pasteform.style.display = "none";
	disease.style.display = "block";
	postforms.style.display = "none";
	calldisease.classList.add("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
	callposts.classList.remove("sub-nav-active");
}else{
	disease.style.display = "none";
	pasteform.style.display = "none";
	callposts.classList.add("sub-nav-active");
	calldisease.classList.remove("sub-nav-active");
	callpaste.classList.remove("sub-nav-active");
}

}


/// add post to 


txtcropsaffected = document.getElementById('cropsaffected');
cmbcropsdestracted = document.getElementById('cmbcropsdestracted');
cmbcropsdestracted.addEventListener('change', () =>{
	let newcrops = cmbcropsdestracted.options[cmbcropsdestracted.selectedIndex].value;
	txtcropsaffected.value += newcrops + " ";
})

function addPastePost(argument) {
	// body...
	// validate input
	let postuserid =  localStorage.getItem("userID");
	let postregion =  localStorage.getItem("Region");
	let postcounty =  localStorage.getItem("County");
	let posttitle = "PASTE ALERT";
	let postdate = document.getElementById('pastepostdate').value;
	let destraction = document.getElementById('cmbpastedestraction');
	let newdestraction = destraction.options[destraction.selectedIndex].value;
	let spreading = document.getElementsByName('spread');
	let affectedcrops = document.getElementById('cropsaffected').value;
	let note = document.getElementById('pastenote').value;
	let spreadstatus;
	// get radion value  
            for(i = 0; i < spreading.length; i++) {
                if(spreading[i].checked)
                spreadstatus = spreading[i].value;
            }
    
     // get timestamp
      let timetimestamp = Date.now();
     console.log(postdate + "/"+ newdestraction + "/"+  spreadstatus + "/"+  affectedcrops + "/"+ note)
     console.log(timetimestamp);


      // check null values
var today = new Date();
var datetoday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
if(affectedcrops == "" || note == ""){
   alert('fill all form details')
   btnsubmitpost.innerHTML ="POST paste";
}else{
	//post to firebase
	firebase.database().ref('pastepost/' + timetimestamp).set({
Postdate: postdate,
Posttime: time,
Newdestraction: newdestraction,
Affectedcrops: affectedcrops,
Note: note,
Spreadstatus: spreadstatus,
Postkey: timetimestamp,
Postuser: postuserid,
Regionaffected: postregion,
Countyaffected: postcounty,
Posttitle: posttitle

    },  (error) => {
  if (error) {
    // The write failed...
     alert('Registration Faled');
     postdate.value = "";
     destraction.selectedIndex = 0;
     spreading.checked = false;
     affectedcrops.value = ""; 
     note.value = "";
     btnsubmitpost.innerHTML ="POST Fail Post again";
  }else{
  	postdate.value = "";
     destraction.selectedIndex = 0;
     spreading.checked = false;
     affectedcrops.value = ""; 
     note.value = "";
  	btnsubmitpost.innerHTML ="Submited successfull";
  }
})
}

}

let btnsubmitpost = document.getElementById('btnsubmitpost');
 btnsubmitpost.addEventListener('click' , () =>{
 	btnsubmitpost.innerHTML ="Submiting ....";
 	addPastePost();
 })
//// add desease to firebase




/// add post to 


txtcropsaffecteddisease = document.getElementById('txtcropsaffecteddisease');
cmbcropsdestracteddisease = document.getElementById('cmbcropsdestracteddisease');
cmbcropsdestracteddisease.addEventListener('change', () =>{
	let newcrops = cmbcropsdestracteddisease.options[cmbcropsdestracteddisease.selectedIndex].value;
	txtcropsaffecteddisease.value += newcrops + " ";
})

function addDiseasePost(argument) {
	// body...
	// validate input
	let postuserid =  localStorage.getItem("userID");
	let postregion =  localStorage.getItem("Region");
	let postcounty =  localStorage.getItem("County");
	let posttitle = "DISEASE ALERT";
	let postdate = document.getElementById('diseasepostdate').value;
	let destraction = document.getElementById('cmbdiseasedestraction');
	let newdestraction = destraction.options[destraction.selectedIndex].value;
	let spreading = document.getElementsByName('diseasespread');
	let affectedcrops = document.getElementById('txtcropsaffecteddisease').value;
	let note = document.getElementById('diseasenote').value;
	let spreadstatus;
	// get radion value  
            for(i = 0; i < spreading.length; i++) {
                if(spreading[i].checked)
                spreadstatus = spreading[i].value;
            }
    
     // get timestamp
      let timetimestamp =  Date.now();
     console.log(postdate + "/"+ newdestraction + "/"+  spreadstatus + "/"+  affectedcrops + "/"+ note)
     console.log(timetimestamp);


      // check null values
var today = new Date();
var datetoday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
if(affectedcrops == "" || note == ""){
   alert('fill all form details')
   btnsubmitpostdisease.innerHTML ="POST Disease";
}else{
	//post to firebase
	firebase.database().ref('pastepost/' + timetimestamp).set({
Postdate: postdate,
Posttime: time,
Newdestraction: newdestraction,
Affectedcrops: affectedcrops,
Note: note,
Spreadstatus: spreadstatus,
Postkey: timetimestamp,
Postuser: postuserid,
Regionaffected: postregion,
Countyaffected: postcounty,
Posttitle: posttitle

    },  (error) => {
  if (error) {
    // The write failed...
  
     btnsubmitpostdisease.innerHTML ="POST Fail Post again";
  }else{
  
  	btnsubmitpostdisease.innerHTML ="Submited successfull";
  }
})
}

}

let btnsubmitpostdisease = document.getElementById('btnsubmitpostdisease');
 btnsubmitpostdisease.addEventListener('click' , () =>{
 	btnsubmitpostdisease.innerHTML ="Submiting ....";
 	addDiseasePost();
 })




/// get post from firebase

// global var for post
let viewpostdate = document.getElementById('viewpostdate');
let viewpostdestraction = document.getElementById('viewpostdestraction');
let viewpostspreading = document.getElementById('viewpostspreading');
let viewpostcrops = document.getElementById('viewpostcrops');
let viewpostcomment = document.getElementById('viewpostcomment');



let newpostid =  localStorage.getItem("userID");
 getAllFirebasePost() ;
function getAllFirebasePost() {
	// body...
	
	firebase.database().ref('pastepost').once('value',function(snapshot){
		snapshot.forEach( 
			function(Childsnapshot) {
   Region = Childsnapshot.val().Regionaffected;
   County = Childsnapshot.val().Countyaffected;
   

})
   
  

})
}



let signOutnow = document.getElementById('btnlogout');
signOutnow.addEventListener('click' , () =>{
   localStorage.clear();
        auth.signOut();
      alert("signed out");
})