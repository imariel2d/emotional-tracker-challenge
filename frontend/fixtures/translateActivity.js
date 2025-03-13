export const translateActivity = (activity) => {
  const translations = {
    "Go for a walk": "Salir a caminar",
    "Listen to music": "Escuchar música",
    "Spend time with friends": "Pasar tiempo con amigos",
    "Do a hobby": "Hacer un pasatiempo",
    "Watch a comedy": "Ver una comedia",
    "Talk to a friend": "Hablar con un amigo",
    "Write in a journal": "Escribir en un diario",
    "Listen to calming music": "Escuchar música relajante",
    "Practice mindfulness": "Practicar mindfulness",
    "Go for a light walk": "Dar un paseo ligero",
    "Do deep breathing exercises": "Hacer ejercicios de respiración profunda",
    "Go for a run": "Salir a correr",
    "Listen to relaxing music": "Escuchar música relajante",
    "Write down feelings": "Escribir los sentimientos",
    "Practice meditation": "Practicar meditación",
    "Try meditation": "Intentar meditación",
    "Do breathing exercises": "Hacer ejercicios de respiración",
    "Take a warm bath": "Tomar un baño caliente",
    "Read a book": "Leer un libro",
    "Listen to nature sounds": "Escuchar sonidos de la naturaleza",
    "Try a new hobby": "Probar un nuevo pasatiempo",
    "Explore new music": "Explorar nueva música",
    "Plan a future trip": "Planear un viaje futuro",
    "Reflect on personal goals": "Reflexionar sobre metas personales",
    "Do some stretching": "Hacer algunos estiramientos"
  };
  return translations[activity] || activity;
};
