# mbacFirebase
Use Google Apps Script to populate a Firebase realtime database with ManageBac data for faster retrieval.

This is not a real-time system and the Firebase data is updated on a daily basis (dependent on Apps Script project triggers).

This project came about due to restrictions within ManageBac meaning that only assigned class teachers can obtain class lists, and only Account admins can use the directory.

Teachers and middle level leaders at our institution had a need to access and use lists based on class or school division membership. These lists contain the student and Parent 1/Parent 2 contact details and salutations. 

#Enable API access to Managebac

Settings > Integrations

Check the box to 'Enable Public API Integration'. A ManageBac public API token will then be available to you and should be used to authenticate each call. This can be regenerated as necessary.

#Create Firebase project

Use the 'Sign in with Google' option to create a FireBase account. Once you have a FireBase account use the 'Create New Project' button to create an account. Set the name of the project and your Country/region then click 'Create Project'.

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

Click the gear icon next to the Project name in the top left corner of the Firebase console. From here select 'Project settings' then in the context specific top navigation select 'Database'. 

To view the database secret hover over the password field and click 'Show'. This key is required for each read/write instruction as described above.

#Create Apps Script project

The first time you want to create a script from Drive, follow these steps:

+ Open Google Drive.
+ Click Create.
+ Click Connect more apps.
+ When the "Connect apps to Drive" window appears, type "script" into the search box and press the Enter key.
+ Click Connect next to the listing for Google Apps Script.
+ Click OK in the confirmation window.

Now that you've connected the app, you can create a script by following just these steps:

+ Open Google Drive.
+ Click Create.
+ Select Script.
+ Select File > Save.
+ Enter the name of your project and click OK to save it.

#Add FireBase library to Apps Script Project

Resources > Libraries

+ Insert the following project key in 'Find a Library': MYeP8ZEEt1ylVDxS7uyg9plDOcoke7-2l
+ Click 'Select'
+ Select the latest public release
+ Click OK and the library is added to the project and ready for use.

This library is available thanks to awesome work by [Romain Vialard](https://plus.google.com/u/0/+RomainVialard-public/about)

#Create script files inside project

+ utility.gs
+ users.gs
+ classes.gs
+ memberships.gs

#Enable project triggers to automate the update of Firebase with ManageBac data

