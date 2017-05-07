//all functionality connected to storing, accessing, modifying beavers

 var beaversList = {};

beaversList.beaverRecord = {
  id: "number",
  name: "string",
  age: "number",
  sex: "string",
  location: "string",
  tracked: "boolean",
  image: "string"

};

beaversList.beavers = [
    {
      id: 1001,
      name: "Bill",
      age: 19,
      sex: "male",
      location: ["WoodStock's gardens"],
      tracked: true,
      image: "https://s-media-cache-ak0.pinimg.com/originals/a7/63/f2/a763f2dbad57863ee0081fe7c6bfa321.png"
    },
    {
      id: 1002,
      name: "Andie",
      age: 15,
      sex: "female",
      location: ["Punxsutawney park"],
      tracked: false,
      image: "http://www.bkgm.com/articles/Fletcher/BeaverTheory/beaver.png"
    },
    {
      id: 1003,
      name: "Chris",
      age: 17,
      sex: "male",
      location: ["Quarryville place"],
      tracked: false,
      image: "http://www.pngmart.com/files/3/Beaver-PNG-Free-Download.png"
    }
];

beaversList.trackedBeavers = [];

//extracts the 'name' from each beaver being tracked and pushes it into a new array
beaversList.inventoryBeavers = function(){
  this.trackedBeavers = [];
  for (var i = 0; i < this.beavers.length; i++) {
    if (this.beavers[i].tracked){
      (this.trackedBeavers).push(this.beavers[i].name)
    }
  };

};

beaversList.addBeaver = function(beaverName, beaverAge, beaverSex, beaverLocation, beaverImage = "https://wpclipart.com/animals/B/beaver/beaver_icon.png"){
  //uses the arguments to create a new beaver object which is saved into 'beavers' array.
  //tracked is default set to yes.
  newBeaver = {
    name: beaverName,
    age: beaverAge,
    sex: beaverSex,
    location: [beaverLocation],
    tracked: true,
    image: beaverImage
  };
  //create new ID
  for (var i = 0; i < this.beavers.length; i++) {
    console.log(this.beavers[i].id);
    newId = this.beavers[i].id
  };
  newBeaver.id = newId +1;

  //we save it into beavers array
  this.beavers.push(newBeaver);

};

//access to the correct beaver id and update info
beaversList.modifyBeaver = function(id, info){
  for (var i = 0; i < this.beavers.length; i++) {
    if (this.beavers[i].id === info){
      console.log(this.beavers[i].name);
    }
  };

};

beaversList.spotBeaver = function(index, place){
  //finds the right beaver from 'beavers' and adds the new location to locationHistory
  this.beavers[index].location.push(" " + place);
  //when a beaver is spotted, it starts tracking it.
  this.beavers[index].tracked = true;

};

//accesses the indicated beaver and sets its 'tracked' property to what it wasn't.
beaversList.toggleTracked = function(index){
  var beaver = this.beavers[index];
  beaver.tracked = !beaver.tracked;

};

//go over all the array setting tracked to false.
beaversList.untrackAll = function(){
  for (var i = 0; i < this.beavers.length; i++) {
    this.beavers[i].tracked = false;
  };
};

//console.logs the arrays.
beaversList.displayBeavers = function(){
  for (var i = 0; i < this.beavers.length; i++) {
    console.log(this.beavers[i]);
  };
  this.inventoryBeavers();
  console.log("Currently tracking", this.trackedBeavers);

};
