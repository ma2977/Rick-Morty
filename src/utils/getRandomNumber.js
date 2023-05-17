 export const getRandomNumber = (min, max) => {
   const amplitud = Math.abs(max - min);
   const randomAmplitud = Math.round(Math.random() * amplitud);
   return min + randomAmplitud;
 };
