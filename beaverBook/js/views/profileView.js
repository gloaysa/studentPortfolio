var profileViewer = {};

profileViewer.displayBeaver = function(){
  beaversList.beavers = JSON.parse(localStorage.getItem("beaver"));
  for (var i = 0; i < beaversList.beavers.length; i++) {
    if (beaversList.beavers[i].lastSelected){
      document.querySelector(".container h2").innerHTML = "Welcome back " + beaversList.beavers[i].name + "!";
      var ul = document.querySelector(".profile");
      //we need to empty the list and create it again every time.
      ul.textContent = "";
      var pLi = document.createElement("p");
      //we use our method to convert from object to string, and assign content of p
      pLi.innerHTML = this.stringifyBeaver(beaversList.beavers[i]);;
      //create the 'li' where everything is going to be
      var uLi = document.createElement("li");
      //add all to li.
      uLi.appendChild(this.createImageProfile(i));
      uLi.appendChild(pLi);
      uLi.appendChild(this.createModifyButton());
      // uLi.appendChild(this.createTrackedButton(i));
      // uLi.appendChild(this.createSpottedButton());
      // uLi.appendChild(this.createProfileButton(i));
      var numberLi = ul.appendChild(uLi);
      numberLi.id = i;
    }
  };
  this.displayRelations();

};

profileViewer.displayRelations = function(){
  for (var i = 0; i < beaversList.beavers.length; i++) {
    if(!beaversList.beavers[i].lastSelected){
      var ul = document.querySelector(".relations");
      //ul.textContent = "";
      var uLi = document.createElement("li");
      uLi.innerHTML = this.stringifyBeaver(beaversList.beavers[i]);
      ul.appendChild(uLi);
      uLi.appendChild(this.createRequestButton());
      uLi.appendChild(this.createUnfriendButton());
      uLi.appendChild(this.createMessageButton());
      var numberLi = ul.appendChild(uLi);
      numberLi.id = i;

    }
  };

};

profileViewer.stringifyBeaver = function(beaver) {
//reads through the properties of the beave object, concatinating them into a string
  var sBeaver = "<span class = \"name\">" + beaver.name + "</span>" +
                "<span class = \"age\">" + beaver.age  + " years old </span> " +
                "<span class = \"sex\">" + beaver.sex + "</span>" +
                "<span class = \"location\"> <strong>Favourite places:</strong><br>" +
                beaver.location + "</span>";
  return sBeaver;

};

profileViewer.stringifyRelation = function(){

};

profileViewer.createImageProfile = function(i) {
  var image = document.createElement("IMG");
  image.src = beaversList.beavers[i].image;
  image.classList.add("pictureProfile");
  return image;
};

profileViewer.createRequestButton = function(){
  button = document.createElement("button");
  button.classList.add("request");
  button.textContent = "Add friend";
  return button;

};

profileViewer.createUnfriendButton = function(){
  button = document.createElement("button");
  button.classList.add("unfriend");
  button.textContent = "Remove friend";
  return button;

};

profileViewer.createMessageButton = function(){
  button = document.createElement("button");
  button.classList.add("message");
  button.textContent = "Send message";
  return button;

};
//creates a button with the modifyProfile class and nice text
profileViewer.createModifyButton = function(){
  button = document.createElement("button");
  button.classList.add("modifyProfile");
  button.textContent = "Modify profile";
  return button;

};

profileViewer.setupEventListener = function(){
  for (var i = 0; i < document.querySelectorAll(".request").length; i++) {
    document.querySelectorAll(".request")[i].addEventListener("click", function(){
      beaver1 = document.getElementsByTagName("li")[0].id;
      beaver2 = this.parentNode.id;
      buttons.request(beaver1, beaver2);
    })

  };
  for (var i = 0; i < document.querySelectorAll(".unfriend").length; i++) {
    document.querySelectorAll(".unfriend")[i].addEventListener("click", function(){
      console.log(this);
    })

  };

  for (var i = 0; i < document.querySelectorAll(".message").length; i++) {
    document.querySelectorAll(".message")[i].addEventListener("click", function(){
      console.log(this);
    })

  };
  for (var i = 0; i < document.querySelectorAll(".modifyProfile").length; i++) {
    document.querySelectorAll(".modifyProfile")[i].addEventListener("click", function(){
      console.log(this);
    })

  };

};
