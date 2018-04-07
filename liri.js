require("dotenv").config();

let [ node, liri, command, ...input] = process.argv
let fs = require("fs")
let keys = require("./keys.js")
let request = require("request")
let Twitter = require('twitter');


if (command === 'movie-this') {
    request("https://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
     
    console.log('Title: ', JSON.parse(body).Title);
    console.log('Year: ', JSON.parse(body).Year);
    console.log('IMDB Rating: ', JSON.parse(body).imdbRating);
    console.log('Produced in: ', JSON.parse(body).Country);
    console.log('Rotten Tomatoes Rating: ', JSON.parse(body).Ratings[1].Value)
    console.log('Language: ', JSON.parse(body).Language)
    console.log('Plot: ', JSON.parse(body).Plot)
    console.log('Actors: ', JSON.parse(body).Actors)
    
    });
}

if (command === 'my-tweets') {

    let client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      });
    let params = {screen_name: 's3vi26'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        console.log(tweets[0].created_at, tweets[0].text)
        console.log(tweets[1].created_at, tweets[1].text)
        console.log(tweets[2].created_at, tweets[2].text)
        console.log(tweets[3].created_at, tweets[3].text)
        console.log(tweets[4].created_at, tweets[4].text)
        console.log(tweets[5].created_at, tweets[5].text)
        console.log(tweets[6].created_at, tweets[6].text)
        console.log(tweets[7].created_at, tweets[7].text)
        console.log(tweets[8].created_at, tweets[8].text)
        console.log(tweets[9].created_at, tweets[9].text)
        console.log(tweets[10].created_at, tweets[10].text)
        console.log(tweets[11].created_at, tweets[11].text)
        console.log(tweets[12].created_at, tweets[12].text)
        console.log(tweets[13].created_at, tweets[13].text)
        console.log(tweets[14].created_at, tweets[14].text)
        console.log(tweets[15].created_at, tweets[15].text)
        console.log(tweets[16].created_at, tweets[16].text)
        console.log(tweets[17].created_at, tweets[17].text)
        console.log(tweets[18].created_at, tweets[18].text)
        console.log(tweets[19].created_at, tweets[19].text)
        }
});

}