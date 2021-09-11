import navBar from '../components/navBar';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navBarEvents';
import domEvents from '../events/domEvents';
import { getTerms } from '../data/data';
import { showTerms } from '../components/terms';
import { getCategories } from '../data/categorydata';
import { showCategory } from '../components/categories';

const startApp = () => { // ADD USER IN ()
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  navigationEvents();
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  getCategories().then(showCategory);
  getTerms().then(showTerms);
};

export default startApp;
