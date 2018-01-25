const ConversationV1 = require('watson-developer-cloud/conversation/v1')
const express = require('express')
const bodyParser = require('body-parser')
var path = require("path")
var http = require("http");

const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

var data = ''

// Set up Conversation service wrapper.
let conversation = new ConversationV1({
  username: '4fc2eb6d-7d1a-448a-b4f3-a086159e104d', // replace with username from service key
  password: 'uGdwq5HIpPnw', // replace with password from service key
  version_date: ConversationV1.VERSION_DATE_2017_05_26
})

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/init', function(req, res) {
  // Start conversation
  
  conversation.message({
    input: { text: "Hi" },
    workspace_id: '0fb1c64d-137a-4cde-8b57-3a027069938a'
  }, function(err, response) {
    if (err) {
	 console.log("Foo");
      console.error(err)
    } else {
      res.send(response)
    }
  })
})

app.post('/submit', function(req, res) {
  var response = conversation.message({
    input: { text: req.body.input.text },
    context : req.body.input.context,
    workspace_id: '0fb1c64d-137a-4cde-8b57-3a027069938a'
  },function(err, response) {
    if (err) {
      console.error(err)
    } else {
      res.send(response)
    }
  })
})

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '80';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));