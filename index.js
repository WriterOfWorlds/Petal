const pbkdf2 = require('pbkdf2');  
const fs = require('fs');
const piexif = require('piexifjs');
const Jimp = require("jimp");
const cheese = require("./ethanscheese")
const getBase64DataFromJpegFile = filename => fs.readFileSync(filename).toString('binary');
const getExifFromJpegFile = filename => piexif.load(getBase64DataFromJpegFile(filename));

// Read the PNG file and convert it to editable format
Jimp.read("./static.png", function (err, image) {
  if (err) {
      
    // Return if any error
    console.log(err);
    return;
  }
  
  // Convert image to JPG and store it to 
  // './output/' folder with 'out.jpg' name
  image.write("./output/out.jpg");
});

const scrubbedStatic = piexif.remove(getBase64DataFromJpegFile("./output/out.jpg"))
fileBuffer = Buffer.from(scrubbedStatic, 'binary');
fs.writeFileSync('./output/out2.jpg', fileBuffer);