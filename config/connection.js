import dns from 'node:dns'; // imports Node's DNS tools for looking up domain information.
dns.setServers(['1.1.1.1', '8.8.8.8']); // An address so we can connect to MongoDB


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {

});

module.exports = mongoose.connection;