//all functionality connected to storing, accessing, modifying beavers

 var beaversList = {
   beaverRecord: {
     name: "string",
     age: "number",
     sex: "string",
     location: "string",
     tracked: "boolean"
   },
    beavers: [
        {
        name: "Bill",
        age: 19,
        sex: "male",
        location: ["WoodStock's gardens"],
        tracked: true
        },
        {
        name: "Andie",
        age: 15,
        sex: "female",
        location: ["Punxsutawney park"],
        tracked: false
        },
        {
        name: "Chris",
        age: 17,
        sex: "male",
        location: ["Quarryville place"],
        tracked: false
        }
    ],

    trackedBeavers: [],

    //for debugging, I guess. It console.logs the arrays.
    displayBeavers: function(){
      for (var i = 0; i < this.beavers.length; i++) {
        console.log(this.beavers[i]);
      };
        console.log("Currently tracking", this.trackedBeavers);
    },

    toggleTracked: function(index){
      //accesses the indicated beaver and sets its 'tracked' property to what it wasn't.
      var beaver = this.beavers[index];
      beaver.tracked = !beaver.tracked;
    },

    //go over all the array setting tracked to false.
    untrackAll: function(){
      for (var i = 0; i < this.beavers.length; i++) {
        this.beavers[i].tracked = false;
      };
    },

    addBeaver: function(beaverName, beaverAge, beaverSex, beaverLocation){
      //uses the arguments to create a new beaver object which is saved into 'beavers' array.
      //tracked is default set to yes.
      newBeaver = {
        name: beaverName,
        age: beaverAge,
        sex: beaverSex,
        location: beaverLocation,
        tracked: true
      };
      //we save it into beavers array
      this.beavers.push(newBeaver);

    },

    spotBeaver: function(index, place){
      //finds the right beaver from 'beavers' and adds the new location to locationHistory
      this.beavers[index].location.push(" " + place);
      //when a beaver is spotted, it starts tracking it.
      this.beavers[index].tracked = true;

    },

    inventoryBeavers: function(){
      //extracts the 'name' from each beaver being tracked and pushes it into a new array
      for (var i = 0; i < this.beavers.length; i++) {
        if (this.beavers[i].tracked){
          (this.trackedBeavers).push(this.beavers[i].name)
        }
      };
    }

}
