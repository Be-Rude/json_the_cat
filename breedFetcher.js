const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2);
const link = ('https://api.thecatapi.com/v1/breeds/search?q=');



request(link + input, (error, response, body) => {
 
  const data = JSON.parse(body);
  
  if (data.length === 0) {
    return console.log(`That breed is not found, please try again!`);
  }
    
  console.log(data[0].description);
  
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

});
