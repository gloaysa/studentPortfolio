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
      // uLi.appendChild(this.createTrackedButton(i));
      // uLi.appendChild(this.createSpottedButton());
      // uLi.appendChild(this.createProfileButton(i));
      var numberLi = ul.appendChild(uLi);
      //and we add an id to that 'li' so we can find it later.
      numberLi.id = i;
    }
  };

};

profileViewer.displayRelations = function(){

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

};

profileViewer.createUnfriendButton = function(){

};

profileViewer.createMessageButton = function(){

};

profileViewer.createModifyButton = function(){

};

profileViewer.setupEventListener = function(){

};
