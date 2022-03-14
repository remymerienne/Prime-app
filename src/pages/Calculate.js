import ROOT from '../constants/root.js';
import PrimeNumberUI from '../views/PrimeNumberUI.js';
import PrimeNumber from '../containers/PrimeNumber.js';


const Calculate = () => {
  ROOT.innerHTML = PrimeNumberUI();
  new PrimeNumber;
};

export default Calculate;
