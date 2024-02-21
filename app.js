// Import the dbConnect function from the dbConnect.js file located in the db directory
const dbConnect = require("./db/dbConnect");

// Import the express library and create an instance of the Express application
const app = require("express")();


// Call the dbConnect function to establish a connection to the MongoDB database
dbConnect.dbConnect();

// Export the express application instance to make it available for use in other files
module.exports = app;
