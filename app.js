const express = require('express');
const app = express();
const port = 4000;
var Twit = require('twit')
var OAuth = require('OAuth');


var oauth = new OAuth.OAuth( 'https://api.twitter.com/oauth/request_token'
                          	, 'https://api.twitter.com/oauth/access_token'
                          	, 'SQJAQ8hkwNpzfWMJ1O0Nnuajg'
                          	, 'egcv6deTK2HlmUn7kCkoWSIU1wgYkE3ybZHhILOVri7BhY173F'
                          	, '1.0A'
                          	, null
                              , 'HMAC-SHA1' );
							  
							  app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
                              
app.get('/donaldTrump', (req, res) =>{
    
    
    var screen_name = 'realDonaldTrump';
    oauth.get( 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + screen_name + '&count=50&trim_user=true'
              , '1276588314775224322-N8ktWXv6THP6ZvOLMbckHiw78vA1pu'
              , '5SRn8G8kgwHfdaKW2Y6wXIp54XEoUXgQWI1jrIukojgNL'
              , function (e, data, result){
                  if (e) console.error(e); 
                  console.log(JSON.parse(data));
                  res.send(JSON.parse(data));
              });

})

app.get('/HillaryClinton', (req, res) =>{
    
    
    var screen_name = 'HillaryClinton';
    oauth.get( 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + screen_name + '&count=50&trim_user=true'
              , '1276588314775224322-N8ktWXv6THP6ZvOLMbckHiw78vA1pu'
              , '5SRn8G8kgwHfdaKW2Y6wXIp54XEoUXgQWI1jrIukojgNL'
              , function (e, data, result){
                  if (e) console.error(e); 
                  console.log(JSON.parse(data));
                  res.send(JSON.parse(data));
              });

})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))
