# mbacFirebase
Populate Firebase with ManageBac data for faster retrieval.

#Enable API access to Managebac

Settings > Integrations

Check the box to 'Enable Public API Integration'. A public API token will then be available and should be used to authenticate each call. This can be regenerated as necessary.

#Create Firebase project

Use the 'sign in with Google' option to create a FireBase account. Once you have a FireBase account use the 'Create New Project' button to create an account. Set the name of the project and your Country/region then click 'Create Project'.

#Set FireBase read/write permissions

Inside your FireBase project select the 'Database' option in the left hand navigation, then 'Rules' in the context specific top navigation and set read/write permissions as follows:

{
  "rules": {
    ".read": false,
    ".write": false
  }
}

These settings remove public accessibility to your database and ensure that only authenticated requests to read and write are successful.

#Obtain FireBase database 'secret'

Click the gear icon next to the Project name in the top left corner of the Firebase console. From here select 'Project settings' then in the context specific top navigation select 'Database'. To view the database secret hover over the password field and click 'Show'. This key is required for each read/write instruction as described above.

#Create Apps Script project

#Add FireBase library to Apps Script Project
