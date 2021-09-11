const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const minions = require('./server/api/minions');

module.exports = app;
/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;


app.use('/api/minions', minions);

// Add middware for parsing request bodies here:


app.get('/', (req, res) =>{
  res.send()
})

// Mount your existing apiRouter below at the '/api' path.


// Add middleware for handling CORS requests from index.html
app.use(cors);
app.use(bodyParser);

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT);
}
