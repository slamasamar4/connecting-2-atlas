// Import the mongoose library, which allows interaction with MongoDB
const mongoose = require("mongoose");

// Import the dotenv library and configure it to load variables from a .env file into process.env
require("dotenv").config();

// Define an asynchronous function named dbConnect, responsible for connecting to the MongoDB database
async function dbConnect() {
  // Print the value of the MONGO_URI environment variable to the console
  console.log(process.env.DB_URI);

  // Attempt to establish a connection to the MongoDB database using the MONGO_URI environment variable
  try {
    // Use mongoose to connect to the MongoDB database, passing options for connection settings
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,           // Use the new URL parser
      useUnifiedTopology: true,        // Use the new Server Discover and Monitoring engine
    });

    // If the connection is successful, print a success message to the console
    console.log("Connected to the database");
  } catch (error) {
    // If an error occurs during the connection attempt, catch it and print it to the console
    console.log(error);
  }
}

// Export the dbConnect function to make it accessible to other modules
module.exports = { dbConnect };
