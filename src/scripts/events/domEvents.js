import {
  createTerm, deleteTerm, updateTerm, getSingleTerm, filterTerms
} from '../data/data';
import { showTerms } from '../components/terms';
import addTermForm from '../components/forms/createTermForm';
import { createCategory } from '../data/categorydata';
import { showCategory } from '../components/categories';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('new-term-submit')) {
      e.preventDefault();
      const termObj = {
        term: document.querySelector('#term-input').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#term_category').value,
        favorite: document.querySelector('#favorite').checked,
        timeStamp: Date.now(),
        user_id: uid
      };
      createTerm(termObj).then((termArray) => showTerms(termArray));
    }

    if (e.target.id.includes('delete-term')) {
      const [, id] = e.target.id.split('--');
      deleteTerm(id).then(showTerms);
    }

    if (e.target.id.includes('edit-term-btn')) {
      const [, id] = e.target.id.split('--');
      getSingleTerm(id).then((termObj) => addTermForm(termObj));
    }

    if (e.target.id.includes('update-term')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const termObj = {
        term: document.querySelector('#term-input').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#term_category').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey,
        user_id: uid
      };
      updateTerm(termObj).then(showTerms);
    }

    if (e.target.id.includes('cate-submit')) {
      e.preventDefault();
      const catObj = {
        cat_name: document.querySelector('#category-input').value,
        user_id: uid
      };
      createCategory(catObj).then((catArray) => showCategory(catArray));
    }

    if (e.target.id.includes('view-categories-btn')) {
      const [, id] = e.target.id.split('--');
      filterTerms(id).then(showTerms);
    }
  });
};

export default domEvents;
