var classUrl = "https://YOUR_MANAGEBAC_DOMAIN/api/classes?auth_token=YOUR_MANAGEBAC_API_KEY";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function classesMain(){
  
  var response = callManagebac();
  
  var object = getJson(response);  

  var classIdArray = createIdArray(object);
  
  var classes = indexClasses(classIdArray, object);

  writeDb("classes", classes);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//classes API call
function callManagebacClasses(){

  var response = UrlFetchApp.fetch(classUrl);
  
  return response;
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//return classes as JSON object
function getJson(response){

  var object = JSON.parse(response.getContentText());

  return object;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//returns an array of all class id's (excluding any classes containing the word curriculum in the title)
function createIdArray(object){
  
  var array = [];

  for(var i = 0; i < object.classes.length; i++){
  
    if(object.classes[i].name.indexOf('Curriculum') == -1){
      array.push(object.classes[i].id); 
    }
  }

  return array;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creates classes as objects with id as key
function indexClasses(array, object){

  var classes = {};  
  
  for(var i = 0; i < array.length; i++){
  
    for(var k = 0; k < object.classes.length; k++){
    
      if(array[i] == object.classes[k].id){
        
        classes[array[i]] = object.classes[k] 
        
      }
    
    }
  
  }
  
  return classes;
  
}
