// Import the Node.js built-in 'http' module, which allows creating HTTP servers
const http = require("http");

// Import the Express application instance from the 'app.js' file
const app = require("./app");

// Set the 'port' property of the Express application to the value of the PORT environment variable if it exists, otherwise default to 3000
app.set("port", process.env.PORT);

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Start the HTTP server and make it listen for incoming requests on the specified port
server.listen(process.env.PORT );
