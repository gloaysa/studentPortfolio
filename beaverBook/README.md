# Project: BeaverBook™️ (browser edition)

[![Elium Academy](http://www.zoomby.es/img/Elium-Logo-200-px-Black-PNG.png)](http://www.elium.academy)


### Prompt

> Beavers are sick of you.  
> They stole your laptop and now all use your tracking software as a Facebook For Beavers: BeaverBook™️

---

Be ready, this file (and project) is loooong.

#### This project contains 9 files: 2 HTML, 2 CSS and 5 Javascript files.

1. /**home.html**: The site that the people will see and use. The structure is up to you, but it must contain *(you can copy & paste it from the last project and modify when need it)*:  

  + Imports: controller.js, homeStyle.css, beaversModel.js, homeView.js.  
  + Interactions:

  		- UNLIKE ALL BEAVERS: be able to untrack all beavers when funding is cut.  
  		- RELIKE ALL BEAVERS: rich daddy. :heavy_exclamation_mark:
  		- UNLIKE SINGLE BEAVER: maybe it died :( Or maybe you're just bored of it.  
  		- LIKE A SINGLE BEAVER: maybe it wasn't dead!  
  		- ADD A BEAVER: using some input fields to collect all the needed info.  
  		- SPOT A BEAVER: prompt the user for the new location and add it to the beaver list.  
  		- VIEW A BEAVER's PROFILE:  navigate to the profile page and render the chosen beaver's profile.

2. /**profile.html**: A dynamic html page that shows all the beaver's profiles.

	+ Imports: controller.js, profileStyle.css, beaversModel.js, relationsModel.js, profileView.js.  
	+ Interactions:

		- RETURN HOME: Go from profile.html to home.html.  
		- NAVIGATE TO FRIEND BEAVERS PROFILE: By clicking on a friend beaver's name, display their profile.  
		- SEND FRIEND REQUEST: Click on a not-friend beaver to send a request.  
		- RESPOND TO FRIEND REQUEST: Have the option to accept or deny a request. If accepted, a relationship is added. Consider adding notifications to both parties.  
		- SEND MESSAGE: Click a message button by a friend beaver, have a prompt for the new message, save the message to that relationship object, display updated message history.  
		- UNFRIEND: Kill a friendship, does not need confirmation from the other.

3. styles/**homeStyle.css**: A file to make the home.html file looks pretty :dizzy: All the content is optional. *(Copy and paste it from last project, modifying when need it)*

4. styles/**profileStyle.css**: A file to make the profile.html file looks pretty :sparkles: All the content is optional.

5. scripts/models/**model.js**: All the functionality connected to storing, accessing, modifying beavers. It will have a main object storing other objects and functions. *(Copy and paste it from last project, modifying when need it)*.

	+ beaversList: the main object, contains objects and functions.  
	**PROPERTIES**

		- beaverRecord: object. Their properties must be:

			* ID: int, a unique ID assigned at document creation. no two may ever have the same. :heavy_exclamation_mark:  
			* NAME: string, the beaver's name.  
			* AGE: integer, the beaver's age.  
			* SEX: string, indicating beaver's sex.  
			* LOCATION: array, containing history of recorded sightings.  
			* TRACKED: boolean, is this beaver being tracked?

		- beavers: array containing beavers records.  
	**METHODS**

		- trackedBeavers: array containing the names of the beavers being tracked.  
		- toogleTracked: a function. Accesses the indicated beaver and sets its 'tracked' property to what it wasn't.

			* arguments: integer, the index of the beaver to un/track.  
			* returns: console.log the success/not message.

		- addBeaver: function. Uses the arguments to create a new beaver object which is saved into 'beavers' array.

			* arguments: string and number, a string with the name, sex, gender and location (optional) and a number with the beaver's age.  
			* returns: console.log success/not message.

		- spotBeaver: function. Finds the right beaver from 'beavers' array and adds the new location to 'location'.

			* arguments: it will take two arguments: something to identify which beaver modify and the new location.  
			* returns: nada.

		- untrackAll: function. Change all the beaver's tracked property to false.

			* arguments: nada.  
			* returns: success/not message.

		- inventoryBeavers: function. Extracts the 'name' from each beaver being tracked and pushes it into the 'trackedBeavers' array.

			* no arguments.  
			* returns: array.

		- modifyBeaver: accesses the correct beaver and modify it. :heavy_exclamation_mark:  

			* arguments: a beaver id and the info to be updated.  
			* returns: success/not message and new beaver.

6. scripts/models/**relationsModel.js**: all functionality connected to storing, accessing, modifying beavers.

	+ relationshipRecord: object.  
	**PROPERTIES**

		- ID: unique id for this record.
		- BEAVER1: the id of the beaver to send the request.
		- BEAVER2: the id of the beaver requested.
		- MESSAGES: data structure storing the message history between these two beavers.
		- STATUS: Indicates pending or responded to. It could be a boolean, you have to design this one to fit how you envision beavers classifying their relationships. Perhaps a string so 'its complicated' is an option.  

	+ beaversList: an object, contains objects and functions.  
	**PROPERTIES**

		- relations: array containing relationships records.  
	**METHODS**

		- changeStatus: accesses the status of the indicated record and change it.

			* ARGUMENTS: Depends on how you choose to use status.  
			* RETURNS: Success/not message.

		- addRelation: Uses the arguments to create a new relationship object which is saved into 'relations' array. Status is set to default, messages data structure is initialized empty, and ID is generated.  

			* ARGUMENTS: int, beaver ID 1 and beaver ID 2.  
			* RETURNS: Success/not message.  

		- addMessage: Adds the message to the message history and alerts of success or failure.  

			* ARGUMENTS: string, the new message & int, the ID of the relationship.  
			* RETURNS: Success/not message.  

		- deleteRelation: Deletes the relation and returns an alert.  

			* ARGUMENTS: ID of the relation to be deleted.  
			* RETURNS: Success/not message.  

7. scripts/views/**homeView.js**: All functionality connected to making something visible on screen (DOM manipulation). Nothing much will have changed here unless you want to fancy it up. *(Copy and paste it from last project, modifying when need it)*.

	+ homeViewer: the main object. All the functions are stored inside:  
	**METHODS**

		- displayBeavers: it's the function used to display all the beavers. It creates a html 'ul' and populates it with beaver's profiles and all the buttons that entails. It doesn't take any argument. When it's called, it will display beavers info nicely.

		- stringfyBeaver: reads through the properties of the beave object passed as argument and concatinates them into a string.

			* ARGUMENTS: a beaver object.  
			* RETURNS: a stringified version of the beaver object.

		- createSpottedButton: creates a button with an specific class and some text inside. This is the button that will be used when the user spot a beaver to add the location.

			* ARGUMENTS: none or beaver's name (up to you).  
			* RETURNS: success message and the button, or just failure message.

		- createTrackedButton: creates a button with an specific class and some nice text inside. This is the button that will be used to start/stop tracking an specific beaver.

			* ARGUMENTS: none or beaver's name (up to you).  
			* RETURNS: success message and the button.

		- setupEventListeners: connects onclick events to buttons according to their class.

			* ARGUMENTS: nada.  
			* RETURNS: nada.

8. scripts/views/**profileView.js**: All functionality connected to making something visible on screen (DOM manipulation).  

	+ profileViewer: the main object. All the functions are stored inside:  
	**METHODS**

		- displayBeaver: displays the profile info for the beaver you're viewing.  

			* ARGUMENTS: ID of beaver object to profile.  
			* RETURNS: Success/not message.  

		- displayRelations: creates a UL and populates it with relationship infos and all the buttons that entails. Creates another list for all beavers that are not yet friends with this one.  

			* ARGUMENTS: ID of beaver object you're viewing.  
			* RETURNS: Success/not message.  

		- stringifyRelation: reads through the properties of the beave object, concatinating them into a string.  

			* ARGUMENTS: a beaver object.  
			* RETURNS: a stringified version of the beaver object.  

		- createRequestButton: creates a button with the request class and nice text, returning success message and a button or no success and no button.  
		- createUnfriendButton: creates a button with the unfriend class and nice text, returning success message and a button or no success and no button.  
		- createMessageButton: creates a button with the message class and nice text, returning success message and a button or no success and no button.  
		- createModifyButton: creates a button with the modifyProfile class and nice text, returning success message and a button or no success and no button.  
		- setupEventListeners: connects onclick events to buttons according to their class.

			* ARGUMENTS: nada.  
			* RETURNS: success/not message.


9. scripts/**controller.js**: manipulates the objects and functions of the 4 previous files. All the buttons call a method to this object. This will be a huge object, find a way you like to make this more manageable (maybe by giving controller several property objects). *(Copy and paste it from last project, and add all the new functions)*.


	- **FUNCTIONALITIES**: everything from the previous project plus:

		* profilePage: a handler for each functionality needed on the profile page that can't be completed using a handler from last project.  
		* lastSelected: store a property that remembers the last beaver clicked. This will be helpful when navigating to a beaver's profile or sending a friend request.  
		* relationshipManagement: you will need to 'duplicate' the beaver-based handlers so you can handle relationship objects.  
		* navigation: handlers that manage going from home->profile, profile->home, profile->profile.  


---

### Usage example

- A beaver opens the site, clicks on their profile, adds a friend and waits to hear back.

- A beaver goes to its profile and sent a message to Patty.

- A beaver views Patty's profile to see if she is friends with Willard.

---

### Challenge

1. (extra challengy) refactor your project to use classes instead of objects.

---

### RESOURCES

[Get a particular child of a parent](https://stackoverflow.com/questions/2398947/jquery-how-to-get-to-a-particular-child-of-a-parent) | [sessionStorage Attribute](https://www.w3.org/TR/webstorage/#the-sessionstorage-attribute)
