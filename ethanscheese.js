const fs = require('fs');
setInterval(function () {
  fs.readFile("./etc/CHEESE", {
    encoding: 'utf-8'
  }, function (x,result) {
    console.log(result);
  })
});

// 