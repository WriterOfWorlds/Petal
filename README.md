1. Encryption and key-based hashing
2. SKN: Server knows nothing, all keys and data are peer to peer (**not** P2P), nothing is learned by the server.
3. No exif/meta-data!
4. Messages & data should be indistinguishable
5. Messages & data should be signed then encrypted, so no one can decrypt it but the intended recipient (with the public key), and then it can be verified by the intended recipient's device.