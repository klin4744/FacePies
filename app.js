const express = require('express');
const app = express();
const OpenTok = require('opentok');
const { apiKey, projectSecret } = require('./secrets');
const axios = require('axios');
const path = require('path');
let opentok = new OpenTok(apiKey, projectSecret);
let setTime = new Date().getTime();
let sessionId = '';
let token = '';

const createSession = () => {
   opentok.createSession({ mediaMode: 'routed' }, (err, session) => {
      if (err) {
         console.log("couldn't create session");
      } else {
         sessionId = session.sessionId;
      }
   });
};
const createToken = () => {
   token = session.generateToken({
      expireTime: new Date().getTime() / 1000 + 7 * 24 * 60 * 60, // in one week
   });
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(() => {
   if (!sessionId) {
      createSession();
   }
   if (!token.length || new Date().getTime() - setTime <= 0) {
      createToken();
      setTime = new Date().getTime() / 1000 + 7 * 24 * 60 * 60;
   }
   opentok.startArchive();
});
app.get('/', (req, res, next) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
   res.send(error.message);
});
app.get('/lol', (req, res, next) => {
   res.send('it works');
});

const PORT = 8000 || process.env.port;
app.listen(PORT, (req, res, next) => {
   console.log('Server is running on port ' + PORT);
});
