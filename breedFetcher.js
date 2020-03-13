const request = require('request');
const fs = require('fs');
// const input = process.argv.slice(2);
const link = ('https://api.thecatapi.com/v1/breeds/search?q=');

const fetchBreedDescription = function(breedName, callback) {


  request(link + breedName, (error, response, body) => {

    
  
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(error, "");
      return;
    }

    callback(error, data[0].description);

  });
};

module.exports = { fetchBreedDescription };