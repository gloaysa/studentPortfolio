//manipulates beaverList and beaverViewer.  all buttons call a method in CONTROLLER

var handlers = {

  addBeaver: function(){
  //Calls 'view's display beavers method and console.logs the success/not message.

},

  addBeaver: function(name, age, sex, location){
    //calls 'model's addBeaver method. console logs the not success of this operation.
    if(name === "" || age === "" || sex === ""){
      console.log("You didn't add a new beaver!");
    } else {
      beaversList.addBeaver(name, age, sex, location);
      //calls 'view's displayBeavers method
      beaverViewer.displayBeaver();
    }
    //clean up the input
    input = document.querySelectorAll("input")
    for (var i = 0; i < input.length; i++) {
      input[i].value = "";
      //we could add a placeholder again with `if input[i].id = name...`
    };

  },

  spotBeaver: function(index, place){
    //calls 'model's toggleTracked method with the new location and the beaver spotted.
    beaversList.spotBeaver(index, place);
    //calls 'view's displayBeavers method.
    beaverViewer.displayBeaver();
    //and calls again the event listener.
    beaverViewer.setupEventListener();

  },

  toggleTracked: function(index){
    //tells 'model' to untrack the given beaver
    beaversList.toggleTracked(index);
    beaverViewer.displayBeaver();
    beaverViewer.setupEventListener();
  },

  untrackAll: function(){
    //calls 'untrackbeaver' for each beaver in 'model'.
    beaversList.untrackAll();
    beaverViewer.displayBeaver();
    beaverViewer.setupEventListener();
  }


};
//when the page loads for first time, these methods are called.
beaverViewer.displayBeaver();
beaverViewer.setupEventListener();
