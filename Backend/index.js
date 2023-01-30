const express = require('express')
const app = express()
const port = 5000
const connectToMongo = require('./db');

connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello World!')
});




app.listen(port, () => {
  console.log(`listening on port ${port}`)
})