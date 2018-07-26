// LOAD DATA
// =============================================================
var friends = require("../data/friends");

// ROUTING
// =============================================================
module.exports = function(app) {
  
  // Used to display a JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Used to handle incoming survey results
  app.post("/api/friends", function(req, res) {
      friends.push(req.body);
      res.json(true);
  });

    console.log(friends);
};
