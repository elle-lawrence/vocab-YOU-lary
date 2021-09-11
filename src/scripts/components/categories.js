import { clearDom } from '../helpers/clearDom';

const showCategory = (array) => {
  clearDom();
  array.forEach((cat) => {
    document.querySelector('#category-div').innerHTML += `<div class="card card-css">
        <div class="card-body" style="height: 150px;">
        <h5 class="card-title">${cat.cat_name}</h5>
        <i class="btn btn-outline-success fas fa-eye" id="view-categories-btn--${cat.firebaseKey}"></i>       
        <i id="edit-cat-btn--${cat.firebaseKey}" class="fas fa-edit btn btn-outline-info"></i>
        <i id="delete-cat--${cat.firebaseKey}" class="btn btn-outline-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
};

const emptyCatDiv = () => {
  document.querySelector('#category-div').innerHTML = '<h1>No Items</h1>';
};

export { showCategory, emptyCatDiv };
