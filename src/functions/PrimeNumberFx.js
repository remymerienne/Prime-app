export const isPrimeNumber = (number) => {

  if(number < 2 || isNaN(number)) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;

};

export const getPrimeNumberArray = (numberUpTo) => {

  const primeNumberArray = [];

  for (let i = 2; i <= numberUpTo; i++) {
    if (isPrimeNumber(i)) primeNumberArray.push(i);
  }

  return primeNumberArray;
  
};
