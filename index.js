TTconst pbkdf2 = require('pbkdf2');
const forge = require('node-forge');
const path = require('path');
const express = require('express');

const app = express();
const router = express.Router();

const rsa = forge.pki.rsa;

function generateSHA3(optional) {
  // Generate a SHA3 hash
  const hash = forge.md.sha512.create();

  if (optional != null) {
    hash.update(optional);
  } else {
    // Update it with the number of milliseconds elapsed since the Unix Epoch (Makes every hash unique)
    hash.update(String(Date.now()));
  }

  // Output the digested hash as a hex string
  return(hash.digest().toHex());
}

function generateDerivedKey(password) {
  return(pbkdf2.pbkdf2Sync(String(password), generateSHA3(String(password)), 4, 32, 'sha512'))
}

function keyPair() {
  rsa.generateKeyPair({bits: 2048, workers: 2}, function(err, keypair) {
  });
}

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/static/index.html'));
});
app.use('/', router);

let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
  console.log("to end press Ctrl + C");
});