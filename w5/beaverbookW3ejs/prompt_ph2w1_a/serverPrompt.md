import modules

configure app

define middleware
static serving
	any resources that do not change as the data changes 
	(style, scripts, HTML ...)

Beaver handlers   (these will manipulate the models)
|  HTTP method  |  URL | Behavior  |  
|------------- |---------- |--------- |  
|  GET  | /home | retrieves beavers, renders home EJS |  
| GET |  /profile/:id  | retrieves said beaver, renders profile EJS  |  
| POST | /profile/:id/update |  updates said beaver, renders profile EJS |
| DElETE | /profile/:id/delete |  deletes said beaver, renders home EJS|` 
| POST | /signup  | creates beaver, renders said profile   |  


start server
