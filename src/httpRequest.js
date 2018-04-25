const https = require('https');

https.get('https://opentdb.com/api.php?amount=1', (res) => {
  console.log('We have got response:');
  printResponse(res);
});

function printResponse(res){
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}

console.log('After response');