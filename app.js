const express = require('express');
const app = express();
const OpenTok = require('opentok');
const { apiKey, projectSecret } = require('./secrets');
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

const PORT = 8000 || process.env.port;
app.listen(PORT, (req, res, next) => {
   console.log('Server is running on port ' + PORT);
});
