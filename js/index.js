 let allpostholder = document.getElementById('allpostholder');
let Postdate,Affectedcrops,Region,County,Time,Title;
let Newdestraction,Note,Spreadstatus;
 function postcard(date) {
 	// body...
allpostholder.innerHTML += `
            <div id="postform">
 <div class="profile-holder" >
  <div class="avator-holder">
    <center>
    <img src="assests/imageholder.png" width="225px"><br><br>
 			<h3>${Region + " " + County}</h3><br>
    <h3>${Affectedcrops}</h3>
    </center>
  </div>
  <div class="details-holder">
    <center>
      <h3 class="colorgreen">${Title}</h3><br>
      <label><p>Date: &nbsp; ${Postdate + " " + Time}</p></label><br>
    
    <label><p>Destraction:  &nbsp; ${Newdestraction}</p></label><br>
   <label><p>Spreading Status: &nbsp; ${Spreadstatus}</p></label><br>
   
    <div>
      <p>Crops affected: &nbsp; ${Affectedcrops}</p>
      <br>
   <label><p>Comment: &nbsp; ${Note}</p></label><br>
   
    </div>
    
   
  </div>

</div>
</div>
		 	
			`;

 }



FetchAlldata();

function FetchAlldata(){ 
  let today = Date.now();
	firebase.database().ref('pastepost').orderByChild('pastepost/Postkey').once('value', function(snapshot) {
		snapshot.forEach( 
			function(Childsnapshot) {
   Affectedcrops = Childsnapshot.val().Affectedcrops;
   Newdestraction = Childsnapshot.val().Newdestraction;
   Note = Childsnapshot.val().Note;
   Postdate = Childsnapshot.val().Postdate;
   Spreadstatus = Childsnapshot.val().Spreadstatus;
   Region = Childsnapshot.val().Regionaffected;
   County = Childsnapshot.val().Countyaffected;
   Time = Childsnapshot.val().Posttime;
    Title= Childsnapshot.val().Posttitle;
   postcard(Postdate)
   console.log(Postdate);
})
	})
}





///


