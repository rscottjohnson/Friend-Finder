// DEPENDENCIES
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
// =============================================================
// Tells node that we are creating an "express" server
var app = express();

// Set an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
// =============================================================
// Route files to respond to user requests
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// LISTENER
// =============================================================
// Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
