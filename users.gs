var userUrl = "https://YOUR_MANAGEBAC_DOMAIN/api/users?auth_token=YOUR_MANAGEBAC_API_KEY";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function userMain(){
  
  var response = callManagebacUsers();
  
  var object = getJsonUsers(response);
  
  var array = createUserIdArray(object);
  
  var users = indexUsers(array, object);
  
  writeDb("users", users);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//users API call
function callManagebacUsers(){

  var response = UrlFetchApp.fetch(userUrl);
  
  return response;
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//return classes as JSON object
function getJsonUsers(response){

  var object = JSON.parse(response.getContentText());

  return object;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//returns an array of all active user id's
function createUserIdArray(object){
  
  var array = [];

  for(var i = 0; i < object.users.length; i++){
  
    if(object.users[i].archived != true){
      array.push(object.users[i].id);
    }
  
  }

  return array;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creates active users as objects with id as key
function indexUsers(array, object){

  var users = {};  
  
  for(var i = 0; i < array.length; i++){
  
    for(var k = 0; k < object.users.length; k++){
    
      if(array[i] == object.users[k].id){
        
        users[array[i]] = object.users[k] 
        
      }
    
    }
  
  }
  
  return users;
  
}
