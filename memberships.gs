//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function membershipsMain(){
  
  var response = callManagebacClasses();
  
  var object = getJson(response);  

  var classIdArray = createIdArray(object);
  
  var memberships = {};
  
  for(var i = 0; i < classIdArray.length; i++){
  
    memberships[classIdArray[i]] = getMembers(classIdArray[i]);  

  }

  writeDb("memberships", memberships);
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//returns class members
function getMembers(id){

  var baseUrl = "https://vis.managebac.com/api/groups/" + id.toString() + "/members";
  
  var auth_token = "?<YOUR_AUTH_TOKEN";
  
  var memberUrl = baseUrl + auth_token;
  
  var response = UrlFetchApp.fetch(memberUrl);

  var object = JSON.parse(response.getContentText());
  
  var memberArray = [];
  
  for(var i = 0; i < object.members.length; i++){
  
    memberArray.push(object.members[i].id);
  
  }
  
  return memberArray;

}


