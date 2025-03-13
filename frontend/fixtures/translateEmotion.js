export const translateEmotion = (emotion) => {
  const translations = {
    happy: "Feliz",
    sad: "Triste",
    angry: "Enojado",
    anxious: "Ansioso",
    neutral: "Neutral"
  };
  return translations[emotion] || emotion;
};
