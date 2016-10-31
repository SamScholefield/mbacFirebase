//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function wipeDb(){ 
  
  var firebaseUrl = 'YOUR_FIREBASE_PROJECT_URL';
  
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl, 'YOUR_FIREBASE_PROJECT_SECRET');
  
  base.setData("", "");
  
  return [1, 'Wipe success'];
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function writeDb(path, data){
 
  var firebaseUrl = 'YOUR_FIREBASE_PROJECT_URL';
  
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl, 'YOUR_FIREBASE_PROJECT_SECRET');
  
  base.setData(path, data);
  
  return [1, 'Write success'];
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getDb(path){
  
  var db = FirebaseApp.getDatabaseByUrl('YOUR_FIREBASE_PROJECT_URL', 'YOUR_FIREBASE_PROJECT_SECRET');

  var response = db.getData(path); 
  
  return response;
  
}
