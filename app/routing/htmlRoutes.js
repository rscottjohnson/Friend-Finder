// DEPENDENCIES
// =============================================================
var path = require("path");

// ROUTING
// =============================================================
module.exports = function(app) {
  // Handles when users "visit" the page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
