const Emotion = require('../models/emotionModel');
const {getSuggestedActivities} = require("../fixtures/suggestedActivities");
const e = require("express");

// Get all emotions for a user
const getEmotions = async (req, res) => {
  const emotions = await Emotion.find({ user: req.user._id }).sort({ date: -1});
  res.json(emotions);
};

// Get single emotion by ID
const getEmotionById = async (req, res) => {
  const emotion = await Emotion.findById(req.params.id);

  if (!emotion) {
    res.status(404).json({ message: 'Emotion not found' });
    return;
  }

  res.json(emotion);
};

// Create a new emotion entry
const createEmotion = async (req, res) => {
  const { emotion, intensity, notes } = req.body;

  const newEmotion = await Emotion.create({
    user: req.user._id,
    emotion,
    intensity,
    notes
  });

  res.status(201).json(newEmotion);
};

// Update an emotion
const updateEmotion = async (req, res) => {
  const { emotion, intensity, notes } = req.body;

  const emotionRecord = await Emotion.findById(req.params.id);

  if (!emotionRecord) {
    res.status(404).json({ message: 'Emotion not found' });
    return;
  }

  emotionRecord.emotion = emotion || emotionRecord.emotion;
  emotionRecord.intensity = intensity || emotionRecord.intensity;
  emotionRecord.notes = notes || emotionRecord.notes;

  const updatedEmotion = await emotionRecord.save();
  res.json(updatedEmotion);
};

const getEmotionSummary = async (userId) => {
  // Inefficient query
  const emotions = await Emotion.find({ user: userId });

  // TODO: Implement aggregation for better performance
  const summary = {
    count: emotions.length,
    averageIntensity: 0,
    emotionCounts: {}
  };

  emotions.forEach(e => {
    summary.averageIntensity += e.intensity;
    summary.emotionCounts[e.emotion] = (summary.emotionCounts[e.emotion] || 0) + 1;
  });

  if (emotions.length > 0) {
    summary.averageIntensity /= emotions.length;
  }

  return summary;
};

const getMostFrequentEmotion = async (req, res) => {
  const result = await Emotion.aggregate([
    { $match: { user: req.user._id } }, // Filter by user
    { $group: { _id: "$emotion", count: { $sum: 1 } } }, // Count occurrences
    { $sort: { count: -1 } }, // Sort by frequency (highest first)
    { $limit: 1 } // Get the most frequent emotion
  ]);

  const emotion = result.length > 0 ? result[0]._id : null;

  const activities = getSuggestedActivities(emotion);

  res.json({ emotion, activities });
};

module.exports = {
  getEmotions,
  getEmotionById,
  createEmotion,
  updateEmotion,
  getMostFrequentEmotion,
};
