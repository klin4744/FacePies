const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const path = require('path');

app.use(cors);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res, next) => {
   try {
      console.log(path.join(__dirname, 'public', 'index.html'));
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
   } catch (error) {
      res.send(error.message);
   }
});

app.listen(8000, (req, res, next) => {
   console.log('WOW!');
});
