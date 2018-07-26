// DATA
// ===============================================================================

// Below will hold all of the friends data
// Initially set equal to a "dummy" friend
var friendsArray = [
  {
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  }
];

// Makes the array accessible to other files (using require)
module.exports = friendsArray;