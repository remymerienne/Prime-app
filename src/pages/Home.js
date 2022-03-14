import ROOT from '../constants/root.js';
import Login from '../containers/Login.js';
import LoginUI from '../views/LoginUI.js';

const Home = () => {
  ROOT.innerHTML = LoginUI();
  new Login;
};

export default Home;
