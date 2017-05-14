//all functionality connected to storing, accessing, modifying beavers
var relationshipRecord = {
  id: 0,
  beaver1: 0,//id beaver that send request
  beaver2: 0,//id beaver requested
  messages: [], //data structure storing message history
  status: false,//indicates pending or responded
};

beaversList.relations = [relationshipRecord]; //array containing relationshipRecord objects

//**FUNCTIONS**

//accesses the status of the indicated record and change it
beaversList.changeStatus = function(id){
  for (var i = 0; i < this.relations.length; i++) {
    if(this.relations[i].id === id){
      var relation = this.relations[i];
      relation.status ? relation.status = false :
      relation.status = true;
    }
  };
};

//uses the arguments to create a new relationship object
//which is saved into 'relations' array.
beaversList.addRelation = function(beaver1, beaver2){
  var relation = {};
  var id = this.relations[this.relations.length - 1].id + 1;
  relation.id = id;
  relation.beaver1 = beaver1;
  relation.beaver2 = beaver2;
  relation.status = false;
  this.relations.push(relation);

};
//adds the message to the message history and allerts of success or failure.
beaversList.addMessage = function(id, message){
  for (var i = 0; i < this.relations.length; i++) {
    if(this.relations[i].id === id){
      this.relations[i].messages.push(message);
    }
  };

};

//deletes the relationship and returns an alert
beaversList.deleteRelation = function(id){
  for (var i = 0; i < this.relations.length; i++) {
    if(this.relations[i].id === id){
      beaver = this.relations[i].beaver2;
      index = this.relations.indexOf(this.relations[i]);
      this.relations.splice(index, 1);
      alert("You are no longer friend of" + beaver);
    }
  };

};
