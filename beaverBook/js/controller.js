//manipulates beaverList and beaverViewer.  all buttons call a method in CONTROLLER
var handlers = {};

//calls 'model's addBeaver method. console logs the not success of this operation.
handlers.addBeaver = function(name, age, sex, location, image){
  if(name === "" || isNaN(parseInt(age)) || sex === ""){
    console.log("You didn't add a new beaver!");
  } else {
      if (image === "") {
        image = "https://wpclipart.com/animals/B/beaver/beaver_icon.png";
      };
      beaversList.addBeaver(name, age, sex, location, image);
      beaverViewer.setupEventListener();
    };
  //clean up the input
  input = document.querySelectorAll("input")
  for (var i = 0; i < input.length; i++) {
    input[i].value = "";
  };

};

//tells 'model' to untrack the given beaver
handlers.toggleTracked = function(index){
  beaversList.toggleTracked(index);
  beaverViewer.setupEventListener();

};

//calls 'model's toggleTracked method with the new location and the beaver spotted.
handlers.spotBeaver = function(index, place){
  beaversList.spotBeaver(index, place);
  beaverViewer.setupEventListener();

};

//calls 'untrackbeaver' for each beaver in 'model'.
handlers.untrackAll = function(){
  beaversList.untrackAll();
  beaverViewer.setupEventListener();

};

//**BUTTONS**

var buttons = {};

//'add beaver' button
buttons.addBeaver = function(){
  document.getElementById("addBeaver").addEventListener("click", function(){
    //each of this are our inputs.
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var sex = document.getElementById("sex");
    var location = document.getElementById('location');
    var image = document.getElementById('image');
    //the value is captured and sent to handlers.addBeaver function.
    handlers.addBeaver(name.value, age.value, sex.value, location.value, image.value);
  });

};

//'tracking' button
buttons.trackingButton = function(){
  var beaver = document.querySelectorAll("#track");
  for (var i = 0; i < beaver.length; i++) {
    beaver[i].addEventListener("click", function(){
      //'this' is 'beaver[i]'', 'parentNode' is 'li' and 'id' is the number
      //that we setup when creating the 'li' in displayBeaver
      //using 'Element.id' is more appropiate to use here than 'getElementById'
      index = parseInt(this.parentNode.id);
      handlers.toggleTracked(index);
    });
  };

};

// 'add location' button
buttons.addLocation = function(){
  var located = document.querySelectorAll(".spotted");
  for (var i = 0; i < located.length; i++) {
    located[i].addEventListener("click", function(){
      place = prompt("Where have you seen this beaver?");
      //avoid adding null if the user cancels the prompt or empty string if hits accept
      //consoling.log the result
      place === null || place === "" ? console.log("no location added") : (index = this.parentNode.id,
      handlers.spotBeaver(index, place));
    });
  };

};

//'untrack all' button
buttons.untrackAll = function(){
  document.getElementById("untrack").addEventListener("click", function(){
    handlers.untrackAll();
  });

};

buttons.request = function(beaver1, beaver2){
  beaversList.addRelation(beaver1, beaver2);
  profileViewer.displayRelations();
}

//'profile' button
buttons.profileButton = function(){
  var profile = document.querySelectorAll(".profileButton");
  for (var i = 0; i < profile.length; i++) {
    profile[i].addEventListener("click", function(){
      index = this.id;
      profileControl.goToProfile(index);
    });
  };

};


//**PROFILE**
var profileControl = {};

profileControl.goToProfile = function(id){
  for (var i = 0; i < beaversList.beavers.length; i++) {
    beaversList.beavers[i].id === parseInt(id) ?
      beaversList.beavers[i].lastSelected = true :
      beaversList.beavers[i].lastSelected = false;
  }
  localStorage.setItem("beaver", JSON.stringify(beaversList.beavers));
  window.location.href = "profile.html";
};

profileControl.isItFriend = function(i){
  console.log("como llega i a la funcion", i);
  if (beaversList.relations[i] !== undefined){
    return beaversList.relations[i].status;
  }
};
