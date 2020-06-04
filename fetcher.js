const request = require('request');
const fs = require('fs')
const url = process.argv[2];
const downloadPath = process.argv[3]

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename)
  const fileSize = stats["size"]

  console.log(`downloaded and saved ${fileSize} bytes to ${downloadPath}`)
}

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
  fs.writeFile(downloadPath, body, 'utf-8', (err) => {
    if (!err) {
      err = null
    } else {
      console.log(err)
    }
    getFilesizeInBytes(downloadPath)
  })
});


