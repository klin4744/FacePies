// replace these values with those generated in your TokBox Account
const apiKey = '46441642';
const sessionId =
   '1_MX40NjQ0MTY0Mn5-MTU3MTUwMDMxMDM5OX5jOWpscmwwelZLMWlKZk5BdjJ3dEU3V3R-fg';
const token =
   'T1==cGFydG5lcl9pZD00NjQ0MTY0MiZzaWc9NjUxNGI3MDI0MGE4YzI4ZDhiOGVhY2VhZWUyYjk0NjVlOGE4MDhlZjpzZXNzaW9uX2lkPTFfTVg0ME5qUTBNVFkwTW41LU1UVTNNVFV3TURNeE1ETTVPWDVqT1dwc2Ntd3dlbFpMTVdsS1prNUJkakozZEVVM1YzUi1mZyZjcmVhdGVfdGltZT0xNTcxNTAxMDUzJm5vbmNlPTAuMzkyMzgzMjI4MzM0NTg2OTQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU3MTU4NzQ1MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
// (optional) add server code here
initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
   if (error) {
      alert(error.message);
   }
}
function initializeSession() {
   var session = OT.initSession(apiKey, sessionId);
   // Subscribe to a newly created stream
   session.on('streamCreated', function(event) {
      session.subscribe(
         event.stream,
         'subscriber',
         {
            insertMode: 'append',
            width: '100%',
            height: '100%',
         },
         handleError,
      );
   });
   // Create a publisher
   var publisher = OT.initPublisher(
      'publisher',
      {
         insertMode: 'append',
         width: '100%',
         height: '100%',
      },
      handleError,
   );
   // Connect to the session
   session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
         handleError(error);
      } else {
         session.publish(publisher, handleError);
      }
   });
}
