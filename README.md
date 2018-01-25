Running local projects:- 

From a terminal window run 
 - $ yarn or npm i
 - $ yarn start or ng-serve -o
 - application will be accessible at http://localhost:4200 by default

 If running through server.js perform the following
 - $ yarn
 - $ ng build (will need performing everytime changes are made to the angular application)
 - $ node server.js

 - application will be accessible at http://localhost:3200 by default


-- Full configuration -- 
Watson info:- 

To run the application you will need an IBM Watson Conversation account https://www.ibm.com/watson/services/conversation/ (Free 30 day trial). From there create a watson conversation service https://console.bluemix.net/docs/services/conversation/tutorial.html#tutorial. Or use the import file provided in this project. Create somthing simple to start off with you can build on it later. Under the deploy tab you will find your workspace and service credentials. Put the details into server.js let conversation = new ConversationV1({ Details here }}. Watson is now configured.

Azure info:-   

Create an account if you don't have one. https://azure.microsoft.com/en-gb/free/. Select New > Virtual Machines > Create Virtual Machine. Fill in the details requested and continue. (Windows Server Datacenter 2016).


