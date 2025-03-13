const {getEmotions} = require("../controllers/emotionController");
const suggestedActivities = {
  happy: ["Go for a walk", "Listen to music", "Spend time with friends", "Do a hobby", "Watch a comedy"],
  sad: ["Talk to a friend", "Write in a journal", "Listen to calming music", "Practice mindfulness", "Go for a light walk"],
  angry: ["Do deep breathing exercises", "Go for a run", "Listen to relaxing music", "Write down feelings", "Practice meditation"],
  anxious: ["Try meditation", "Do breathing exercises", "Take a warm bath", "Read a book", "Listen to nature sounds"],
  neutral: ["Try a new hobby", "Explore new music", "Plan a future trip", "Reflect on personal goals", "Do some stretching"]
};

const getSuggestedActivities = (emotion) => {
  return suggestedActivities[emotion] || [];
};

module.exports = { getSuggestedActivities };
