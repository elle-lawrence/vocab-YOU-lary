import addTermForm from '../components/forms/createTermForm';
import addCategoryForm from '../components/forms/addCategoryForm';
import signOut from '../helpers/signOut';
import viewAllCards from '../data/mergedData';
import { showCategory } from '../components/categories';
import { showTerms } from '../components/terms';
// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#create-new')
    .addEventListener('click', addTermForm);

  document.querySelector('#category-create')
    .addEventListener('click', addCategoryForm);

  document.querySelector('#my-glossary')
    .addEventListener('click', () => {
      viewAllCards().then((array) => {
        showCategory(array[0]);
        return array[1];
      }).then(showTerms);
    });
};

export default navigationEvents;
