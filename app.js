const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
   try {
      // console.log(path.join(__dirname, 'public', 'index.html'));
      res.sendFile(path.join(__dirname, '../public/index.html'));
   } catch (error) {
      res.send(error.message);
   }
});
app.get('/lol', (req, res, next) => {
   res.send('it works');
});

const PORT = 8000 || process.env.port;
app.listen(PORT, (req, res, next) => {
   console.log('Server is running on port ' + PORT);
});
