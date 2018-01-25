# From scratch environemt set up

- Recomended environment - Visual Studio code - built in terminal window makes things nice.

- NODE - Make sure node is installed with (node - v), if not grab it from https://nodejs.org/en/
- YARN - I'm also a fan of Yarn which can be grabbed from https://yarnpkg.com/lang/en/docs/install/
- ANGULAR CLI - Great fast Angualr tool which can be aquaired by typing $ npm install -g @angular/cli into a terminal window.

# Other tools  
- BOOTSTRAP V4 - The project will grab the files automaticly but its worth reading into.
- FontAwesome 4 - Good popular font library, again it will be installed automaticly on build.

With that you're good to go. 

# Running local projects:- 

From a terminal window run 
 - $ yarn or npm i
 - $ yarn start or ng-serve -o
 - application will be accessible at http://localhost:4200 by default
 - To see a message find app > mdoules > chatter > chat.service.ts and swtich _chatUrl with the commented out version which will just grab the data from a local file.

 If running through server.js perform the following
 - $ yarn
 - $ ng build (will need performing everytime changes are made to the angular application)
 - $ node server.js
 - application will be accessible at http://localhost:80 by default
 - This is pointing at my watson service so if its not running or expired you will need to create your own account and import the config files.


# Watson info:- 

To run the application you will need an IBM Watson Conversation account https://www.ibm.com/watson/services/conversation/ (Free 30 day trial). From there create a watson conversation service https://console.bluemix.net/docs/services/conversation/tutorial.html#tutorial. Or use the import file provided in this project under watson conversation examples provided by O Vaughan. 

If not, create somthing simple to start off with you can build on it later. Under the deploy tab you will find your workspace username and password id's. Put those details into the provided variables in server.js. Watson is now configured.

If you're behind a Corporate firewall, speak to your administrators about allowing the Watson conversation api access. If thats not possible just set up a virtual machine on Azure.

# Azure info:-   

Create an account if you don't have one. https://azure.microsoft.com/en-gb/free/. Select New > Virtual Machines > Create Virtual Machine and select Windows Server DataCenter 2016. Fill in the details with something sensible and select a suitable machine. Nothing too powerful, theres a machine for £36 a month that is more that suitable but is not shown by default. (its also affordable on the credit provided by an MSDN license).

Once the machine is created get the remote desktop connection file by clicking connect in the machine options and connect. 

Once connect open your firewall advanced settings, add a new inbound rule to allow traffic through port 80. 

Install the requirements above and use the server.js instructions above to run the application. If all is working well you should be able to connect to the app localy through http://localhost:80 or outside via http://VM IP:80.


