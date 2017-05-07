//Everything that has to be with how we see the page, is here.
//It calls and redirect functions from model.js and controller.js
var beaverViewer = {}

//creates a UL and populates it with beaver profiles and all the buttons that entails.
beaverViewer.displayBeaver = function() {
  //this function is called every time we add/edit/remove something, to refresh the content.
  var ul = document.querySelector(".beaverList");
  //we need to empty the list and create it again every time.
  ul.textContent = "";

  for (var i = 0; i < beaversList.beavers.length; i++) {
    var pLi = document.createElement("p");
    //we use our method to convert from object to string, and assign content of p
    pLi.innerHTML = this.stringifyBeaver(beaversList.beavers[i]);;
    //create the 'li' where everything is going to be
    var uLi = document.createElement("li");
    //add all to li.
    uLi.appendChild(this.createImageProfile(i));
    uLi.appendChild(pLi);
    uLi.appendChild(this.createTrackedButton(i));
    uLi.appendChild(this.createSpottedButton());
    uLi.appendChild(this.createProfileButton(i));
    //assign 'li' inside our 'ul' with class '.beaverList'
    var numberLi = ul.appendChild(uLi);
    //and we add an id to that 'li' so we can find it later.
    numberLi.id = i;

  };

  //to show the currently tracking beavers. Basically same process.
  //empty the inventory of tracked beavers.
  // beaversList.trackedBeavers = [];
  // beaversList.inventoryBeavers();
  // var anotherList = document.querySelector(".trackedBeavers");
  // anotherList.textContent = "";
  // for (var i = 0; i < beaversList.trackedBeavers.length; i++) {
  //   var li = document.createElement("li")
  //   li.textContent = beaversList.trackedBeavers[i];
  //   anotherList.appendChild(li);
  // }
  beaversList.displayBeavers();

};

//**MODIFYING ELEMENTS**

beaverViewer.stringifyBeaver = function(beaver) {
//reads through the properties of the beave object, concatinating them into a string
  var sBeaver = "<span class = \"name\">" + beaver.name + "</span>" +
                "<span class = \"age\">" + beaver.age  + " years old </span> " +
                "<span class = \"sex\">" + beaver.sex + "</span>" +
                "<span class = \"location\"> <strong>Favourite places:</strong><br>" +
                beaver.location + "</span>";
  return sBeaver;

};

//create image profile and assign it to a beaver
beaverViewer.createImageProfile = function(i) {
  var image = document.createElement("IMG");
  image.src = beaversList.beavers[i].image;
  image.classList.add("pictureProfile");
  return image;
};

//**CREATE BUTTONS TO DISPLAY**

//creates a button with the spotted class and nice text
beaverViewer.createSpottedButton = function() {
  var spotted = document.createElement("button");
  spotted.innerHTML = "<i class=\"fa fa-compass\" aria-hidden=\"true\"></i> Places";
  spotted.classList.add("spotted");
  return spotted;

};

//creates a button with the tracked class and nice text
beaverViewer.createTrackedButton = function(i) {
  var tracking = document.createElement("button");
  tracking.setAttribute("id", "track")
  if (beaversList.beavers[i].tracked){
    tracking.innerHTML = "I <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> you!";
    tracking.classList.add("tracking");
  } else {
    tracking.innerHTML = "I <i class=\"fa fa-thumbs-down\" aria-hidden=\"true\"></i> you";
    tracking.classList.remove("tracking");
    tracking.classList.add("noTracking");
  };
  return tracking;
};

//create profile button.
beaverViewer.createProfileButton = function(i) {
  var profile = document.createElement("button");
  id = beaversList.beavers[i].id
  profile.id = id;
  profile.classList.add("profileButton");
  profile.innerHTML = "<i class=\"fa fa-id-card\" aria-hidden=\"true\"></i> Profile";
  return profile;
}

//**LISTENER BUTTONS**

//this is what keeps our page 'on', listening to the user
beaverViewer.setupEventListener = function(){
//connects onclick events to buttons according to their class
  this.addBeaver();
  this.trackingButton();
  this.addLocation();
  this.untrackAll();
  this.profileButton();
};

//'add beaver' button
beaverViewer.addBeaver = function(){
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
beaverViewer.trackingButton = function(){
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

};

// 'add location' button
beaverViewer.addLocation = function(){
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

};

beaverViewer.profileButton = function(){
  var profile = document.querySelectorAll(".profileButton");
  for (var i = 0; i < profile.length; i++) {
    profile[i].addEventListener("click", function(){
      index = this.id;
      console.log(index);
    });
  };

};

//'untrack all' button
beaverViewer.untrackAll = function(){
  document.getElementById("untrack").addEventListener("click", function(){
    handlers.untrackAll();
  });

};
