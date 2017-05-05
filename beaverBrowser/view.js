//Everything that has to be with how we see the page, is here.
//It calls and redirect functions from model.js and controller.js

var beaverViewer = {

  displayBeaver: function() {
    //creates a UL and populates it with beaver profiles and all the buttons that entails.

    //this function is called every time we add/edit/remove something, to refresh the content.
    var uList = document.querySelector(".beaverList");
    //we need to empty the list and create it again every time.
    uList.textContent = "";
    //same with the inventory of tracked beavers.
    beaversList.trackedBeavers = [];

    for (var i = 0; i < beaversList.beavers.length; i++) {
      var pLi = document.createElement("p");
      //we use our method to convert from object to string
      newP = this.stringifyBeaver(beaversList.beavers[i]);
      //assign the string as content of the new paragraph
      pLi.textContent = newP;
      //create the 'li' where the paragraph is going to be
      var uLi = document.createElement("li");
      //and create the button to track that particular beaver
      var trackingButton = uLi.appendChild(this.createTrackedButton());
      //then assign the paragraph inside that 'li'
      uLi.appendChild(pLi);
      //and create the 'add location' button
      uLi.appendChild(this.createSpottedButton());
      //next step is propably the trickier part,
      //be sure that you understand it before continue.

      //first we assign 'li' inside our 'ul' with class '.beaverList'
      var numberLi = uList.appendChild(uLi);
      //and we add an id to that 'li' so we can find it later.
      numberLi.id = i;
      //if tracked is true, we add the class
      if (beaversList.beavers[i].tracked){
        trackingButton.classList.add("tracking");
      } else {
        trackingButton.textContent = "no tracking";
        trackingButton.classList.remove("tracking");
        trackingButton.classList.add("noTracking");
      }

    };

    //to show the currently tracking beavers. Basically same process.
    beaversList.inventoryBeavers();
    var anotherList = document.querySelector(".trackedBeavers");
    anotherList.textContent = "";
    for (var i = 0; i < beaversList.trackedBeavers.length; i++) {
      var li = document.createElement("li")
      li.textContent = beaversList.trackedBeavers[i];
      anotherList.appendChild(li);
    }
    beaversList.displayBeavers();

  },

  stringifyBeaver: function(beaver){
    //reads through the properties of the beave object, concatinating them into a string
    var sBeaver = beaver.name + ", " + beaver.age  + " years old, " + beaver.sex + ", spotted at: " + beaver.location;
    return sBeaver;
  },

  createSpottedButton: function(){
    //creates a button with the spotted class and nice text
    var spotted = document.createElement("button");
    spotted.textContent = "add location";
    spotted.classList.add("spotted");
    return spotted;

  },

  createTrackedButton: function(){
    //creates a button with the tracked class and nice text
    var tracking = document.createElement("button");
    tracking.textContent = "tracking...";
    tracking.setAttribute("id", "track")
    tracking.classList.add("tracking");
    return tracking;

  },

//this is what keeps our page 'on', listening to the user
  setupEventListener: function(){
    //connects onclick events to buttons according to their class

    //'add beaver' button
    document.getElementById("addBeaver").addEventListener("click", function(){
      //each of this are our inputs.
      var name = document.getElementById("name");
      var age = document.getElementById("age");
      var sex = document.getElementById("sex");
      var location = document.getElementById('location')
      //the value is captured and sent to handlers.addBeaver function.
      handlers.addBeaver(name.value, age.value, sex.value, location.value);
    });

    //'tracking' button
    var beaver = document.querySelectorAll("#track");
    for (var i = 0; i < beaver.length; i++) {
      beaver[i].addEventListener("click", function(){
        //'this' is 'beaver[i]'', 'parentNode' is 'li' and 'id' is the number
        //that we setup when creating the 'li' in displayBeaver
        //using 'Element.id' is more appropiate to use here than 'getElementById'
        index = this.parentNode.id
        handlers.toggleTracked(index);
      });
    };
    // 'add location' button
    var located = document.querySelectorAll(".spotted");
    for (var i = 0; i < located.length; i++) {
      located[i].addEventListener("click", function(){
        place = prompt("Where have you seen this beaver?");
        //avoid adding null if the user cancels the prompt or empty string if hits accept
        //consoling.log the result
        place === null || place === "" ? console.log("no location added") : (index = this.parentNode.id,
        //same as before with paredNode.id
        // index = this.parentNode.id;
        handlers.spotBeaver(index, place));
      });
    };

    //'untrack all' button
    document.getElementById("untrack").addEventListener("click", function(){
      handlers.untrackAll();
    });
  },
}
