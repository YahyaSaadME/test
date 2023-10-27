const express = require('express');
const path = require("path")
const app = express();

// Serve a basic HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/",(req,res)=>{
  res.send("Welcome")
})
// Start the server
app.listen(5000, () => {
  console.log('Server listening on port 3000');
});
