require("dotenv").config();

let [ node, liri, command, ...input] = process.argv
let fs = require("fs")
let keys = require("./keys.js")
let request = require("request")

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

if (command === 'spotify-this-song') {


}