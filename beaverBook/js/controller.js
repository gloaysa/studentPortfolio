//manipulates beaverList and beaverViewer.  all buttons call a method in CONTROLLER
var handlers = {};

//calls 'model's addBeaver method. console logs the not success of this operation.
handlers.addBeaver = function(name, age, sex, location, image){
  if(name === "" || age === "" || sex === ""){
    console.log("You didn't add a new beaver!");
  } else {
    if (image === "") {
      image = "https://wpclipart.com/animals/B/beaver/beaver_icon.png";
    };
    beaversList.addBeaver(name, age, sex, location, image);
    //calls 'view's displayBeavers method
    beaverViewer.displayBeaver();
    beaverViewer.setupEventListener();
  };
  //clean up the input
  input = document.querySelectorAll("input")
  for (var i = 0; i < input.length; i++) {
    input[i].value = "";
    //we could add a placeholder again with `if input[i].id = name...`
  };

};

//tells 'model' to untrack the given beaver
handlers.toggleTracked = function(index){
  beaversList.toggleTracked(index);
  beaverViewer.displayBeaver();
  beaverViewer.setupEventListener();

};

//calls 'model's toggleTracked method with the new location and the beaver spotted.
handlers.spotBeaver = function(index, place){
  beaversList.spotBeaver(index, place);
  //calls 'view's displayBeavers method.
  beaverViewer.displayBeaver();
  //and calls again the event listener.
  beaverViewer.setupEventListener();

};

handlers.goToProfile = function(id){
  for (var i = 0; i < beaversList.beavers.length; i++) {
    beaversList.beavers[i].id === parseInt(id) ?
      beaversList.beavers[i].lastSelected = true :
      beaversList.beavers[i].lastSelected = false;
  }
};

//calls 'untrackbeaver' for each beaver in 'model'.
handlers.untrackAll = function(){
  beaversList.untrackAll();
  beaverViewer.displayBeaver();
  beaverViewer.setupEventListener();

};

//when the page loads for first time, these methods are called.
beaverViewer.displayBeaver();
beaverViewer.setupEventListener();
