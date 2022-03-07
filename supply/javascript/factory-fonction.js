export default (race, age, couleur) => {

  const bonjour = () => console.log(`Bonjour chat de ${race}`);

  return {
    race,
    age,
    couleur,
    bonjour,
  };
  
};
