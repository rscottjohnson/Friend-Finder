// LOAD DATA
// =============================================================
var friends = require("../data/friends");

// ROUTING
// =============================================================
module.exports = function (app) {

  // Display a JSON of all possible friends
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // Handle incoming survey results
  app.post("/api/friends", function (req, res) {

    var surveyData = req.body;
    var totalDelta = 0;
    
    // Starter comparision / dummy values
    var closeFriend = {
      name: "",
      photo: "",
      answerDelta: 100
    };

    // Loop through friends
    for (var i = 0; i < friends.length; i++) {
      
      // Loop through friends' scores
      for (var j = 0; j < friends[i].scores.length; j++) {
        
        // Calc the delta between scores
        totalDelta = totalDelta + Math.abs(parseInt(friends[i].scores[j]) - parseInt(surveyData.scores[j]));

        console.log(totalDelta);

        // Update the 'closeFriend' data if the delta is smaller than the current 'closeFriend' delta
        if (totalDelta <= closeFriend.answerDelta) {
          closeFriend.name = friends[i].name;
          closeFriend.photo = friends[i].photo;
          closeFriend.answerDelta = totalDelta;
        }
      }
      totalDelta = 0;
    }
    console.log(closeFriend.name);
    
    // Add the data
    friends.push(surveyData);

    // Show the closest friend / least delta
    res.json(closeFriend);
  });
};