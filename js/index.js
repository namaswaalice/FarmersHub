 let allpostholder = document.getElementById('allpostholder');
let Postdate,Affectedcrops;
let Newdestraction,Note,Spreadstatus;
 function postcard(date) {
 	// body...
allpostholder.innerHTML += `
            <div id="postform">
 <div class="profile-holder" >
  <div class="avator-holder">
    <center>
    <img src="assests/imageholder.png" width="225px"><br><br>
 			
    </center>
  </div>
  <div class="details-holder">
    <center>
      <h3 class="colorgreen">Post title</h3><br>
      <label><p>Date noticed in farm &nbsp; ${Postdate}</p></label><br>
    
    <label><p>Destraction to farm &nbsp; ${Newdestraction}</p></label><br>
   <label><p>Spreading to next farms &nbsp; ${Spreadstatus}</p></label><br>
   
    <div>
      <p>Crops affecting &nbsp; ${Affectedcrops}</p>
      <br>
   <label><p>Note/comment &nbsp; ${Note}</p></label><br>
   
    </div>
    
   
  </div>

</div>
</div>
		 	
			`;

 }



FetchAlldata();

function FetchAlldata(){ 
	firebase.database().ref('pastepost').once('value', function(snapshot) {
		snapshot.forEach( 
			function(Childsnapshot) {
   Affectedcrops = Childsnapshot.val().Affectedcrops;
   Newdestraction = Childsnapshot.val().Newdestraction;
   Note = Childsnapshot.val().Note;
   Postdate = Childsnapshot.val().Postdate;
   Spreadstatus = Childsnapshot.val().Spreadstatus;
   // addPostToList(name, roll, sec, gen);
   postcard(Postdate)
   console.log(Postdate);
})
	})
}





///


