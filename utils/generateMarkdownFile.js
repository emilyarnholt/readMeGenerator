const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        //  reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // returns out of the function 
          return;
        }
  
        // resolve the Promise and send the data to `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  module.exports = writeFile;