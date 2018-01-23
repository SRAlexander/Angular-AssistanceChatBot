const prompt = require('prompt-sync')();
const ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
let conversation = new ConversationV1({
  username: '99d839cb-f9d2-422f-b57d-4c2e6920eb20', // replace with username from service key
  password: 'imItVTsLVZVP', // replace with password from service key
  version_date: ConversationV1.VERSION_DATE_2017_05_26
});

console.log('******** Begining session ********')

// Start conversation
conversation.message({
    input: { text: "Hi" },
    workspace_id: '0fb1c64d-137a-4cde-8b57-3a027069938a'
  },
  processResponse
);

function processResponse(err, response) {
    if (err) {
        console.error(err)
    } 
  
    // Uncomment console log the entire JSON context 
    console.log(response)

    // Uncomment console log the intents being sent from the watson service
    /* if (response.intents.length > 0) {
        console.log('Detected intent: #' + response.intents[0].intent);
    }	*/
  	
    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
        for(var i = 0; i < response.output.text.length; i++) {
            console.log(response.output.text[i])
        }
    }
  
    // Only run if this is the goodbye intent and the script needs to exit
    if(response.intents.length > 0 && response.intents[0].intent == "goodbye") {
        console.log('******** Ending session ********')
        process.exit()
    }

	let newMessageFromUser = prompt('>> ')
   
  // Take the new input and "recurse" by calling this function again
  conversation.message({
    input: { text: newMessageFromUser },
    context : response.context,
    workspace_id: '0fb1c64d-137a-4cde-8b57-3a027069938a'
  }, processResponse)	
}