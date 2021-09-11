import { clearDom } from '../helpers/clearDom';

const showTerms = (array) => {
  clearDom();

  array.forEach((term) => {
    document.querySelector('#store').innerHTML += `<div class="card card-css">
        <div class="card-body" style="height: 500px;">
        <h5 class="card-title">${term.term}</h5>
        <p>${term.definition}</p>
        <p class="card-text bold">${term.favorite ? '<span class="badge rounded-pill bg-info text-dark" aria-hidden="true">favorite</span>' : ''}</p>
        <i id="edit-term-btn--${term.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-term--${term.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
};

const emptyGlossary = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showTerms, emptyGlossary };
