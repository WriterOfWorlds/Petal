1. Encryption and key-based hashing
2. SKN: Server knows nothing, all keys and data are P2P, nothing is learned by the server.
3. No exif/meta-data!

<br><br>
Note for Kekoa:
How to use passwords with SHA3:<br>

1. User enters their password and confirms it
2. Password is encrypted (ON THE USERS DEVICE, NOT THE SERVER) and sent to the server
3. Server can't read it, so hackers can't read it either
4. Password is securely stored on the server.

<br>
<br>

1. The same user enters their password to login
2. Their password attempt is encrypted (ON THE USERS DEVICE, NOT THE SERVER) and sent to the server
3. Server can't read this code either, but it compares the two encrypted codes (The password and the attempt)
4. If they match, the server lets the user in, and their passwords are safe