var profileViewer = {};
if (localStorage.hasOwnProperty("beaversRelation")){
  beaversList.relations = JSON.parse(localStorage.getItem("beaversRelation"))
};

profileViewer.displayBeaver = function(){
  beaversList.beavers = JSON.parse(localStorage.getItem("beaver"));
  //beaversList.beavers = JSON.parse(localStorage.getItem("beaversRelation"));
  for (var i = 0; i < beaversList.beavers.length; i++) {
    if (beaversList.beavers[i].lastSelected){
      theBeaver = beaversList.beavers[i];
      document.querySelector(".container h2").innerHTML = "Welcome back " + theBeaver.name + "!";
      var ul = document.querySelector(".profile");
      //we need to empty the list and create it again every time.
      ul.textContent = "";
      var pLi = document.createElement("p");
      //we use our method to convert from object to string, and assign content of p
      pLi.innerHTML = this.stringifyBeaver(theBeaver);;
      //create the 'li' where everything is going to be
      var uLi = document.createElement("li");
      //add all to li.
      uLi.appendChild(this.createImageProfile(i));
      uLi.appendChild(pLi);
      uLi.appendChild(this.createModifyButton());

      if (buttons = profileControl.hasRequest(theBeaver)) {
        //uLi.appendChild.hasRequest(beaversList.beavers[i]);
        for (var i = 0; i < buttons.length; i++) {
          uLi.appendChild(buttons[i]);
        }
      };

      var numberLi = ul.appendChild(uLi);
      numberLi.id = i;
    }
  };
  this.displayRelations();

};

profileViewer.displayRelations = function(){
  var ul = document.querySelector(".relations");
  ul.textContent = "";
  for (var i = 0; i < beaversList.beavers.length; i++) {
    var isItFriend = profileControl.isItFriend(i);
    if(!beaversList.beavers[i].lastSelected){
      var uLi = document.createElement("li");
      uLi.innerHTML = this.stringifyBeaver(beaversList.beavers[i]);
      isItFriend ? uLi.classList.add("friend") : uLi.classList.remove("friend");
      ul.appendChild(uLi);
      uLi.appendChild(this.createRequestButton());
      uLi.appendChild(this.createUnfriendButton());
      uLi.appendChild(this.createMessageButton());
      var numberLi = ul.appendChild(uLi);
      numberLi.id = i;

    }
  };
  this.setupEventListener();
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
//create an accept request button with requester name.
profileViewer.createAcceptRequestButton = function(requester, id){
  button = document.createElement("button");
  button.classList.add("acceptRequest");
  button.setAttribute("id", id);
  button.textContent = "Accept friend request from " + requester;
  return button;

}
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
      beaver1 = parseInt(document.getElementsByTagName("li")[0].id);
      beaver2 = parseInt(this.parentNode.id);
      buttonsControl.request(beaver1, beaver2);
    });

  };

  for (var i = 0; i < document.querySelectorAll(".acceptRequest").length; i++) {
    document.querySelectorAll(".acceptRequest")[i].addEventListener("click", function(){
      profileControl.acceptRequest(parseInt(this.id));
    })

  };

  for (var i = 0; i < document.querySelectorAll(".unfriend").length; i++) {
    document.querySelectorAll(".unfriend")[i].addEventListener("click", function(){
      console.log(this);
    });

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
