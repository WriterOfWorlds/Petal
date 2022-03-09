const { SHA3 } = require('sha3');
const pbkdf2 = require('pbkdf2')

function generateSHA3(optional) {
  // Generate a SHA3 hash
  const hash = new SHA3(512);

  if (optional != null) {
    hash.update(optional);
  } else {
    // Update it with the number of milliseconds elapsed since the Unix Epoch (Makes every hash unique)
    hash.update(String(Date.now()));
  }

  // Output the digested hash as a hex string
  return(hash.digest('hex'));
}

function generateDerivedKey(password) {
  return(pbkdf2.pbkdf2Sync(String(password), generateSHA3(String(password)), 4, 32, 'sha512'))
}