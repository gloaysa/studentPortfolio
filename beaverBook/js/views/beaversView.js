//Everything that has to be with how we see the page, is here.
//It calls and redirect functions from model.js and controller.js
var beaverViewer = {}

if (localStorage.hasOwnProperty("beaversList")){
  beaversList.beavers = JSON.parse(localStorage.getItem("beaversList"))
};

if (localStorage.hasOwnProperty("beaversRelation")){
  beaversList.relations = JSON.parse(localStorage.getItem("beaversRelation"))
};


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
  spotted.innerHTML = "<i class=\"fa fa-compass\"</i> Places";
  spotted.classList.add("spotted");
  return spotted;

};

//creates a button with the tracked class and nice text
beaverViewer.createTrackedButton = function(i) {
  var tracking = document.createElement("button");
  tracking.setAttribute("id", "track")
  if (beaversList.beavers[i].tracked){
    tracking.innerHTML = "I <i class=\"fa fa-thumbs-up\"></i> you!";
    tracking.classList.add("tracking");
  } else {
    tracking.innerHTML = "I <i class=\"fa fa-thumbs-down\"></i> you";
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
  profile.innerHTML = "<i class=\"fa fa-id-card\"></i> Profile";
  return profile;
}

//**LISTENER BUTTONS**

//this is what keeps our page 'on', listening to the user
beaverViewer.setupEventListener = function(){
  this.displayBeaver();
  buttonsControl.addBeaver();
  buttonsControl.trackingButton();
  buttonsControl.addLocation();
  buttonsControl.untrackAll();
  buttonsControl.profileButton();
};
