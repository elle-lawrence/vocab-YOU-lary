import { getCategories } from '../data/categorydata';

const selectCategory = (category) => {
  let domString = `<label for="category" class="col-sm-2 col-form-label">Category</label>
  <div class="col-sm-10">
    <select class="form-control" id="term_category" required>
    <option value="">Select a Category</option>`;

  getCategories().then((catArray) => {
    catArray.forEach((catObj) => {
      domString += `
          <option value="${catObj.firebaseKey}" 
            ${category === catObj.firebaseKey ? 'selected' : ''}>
              ${catObj.cat_name}
          </option>`;
    });

    domString += '</select></div>';

    document.querySelector('#select-category').innerHTML = domString;
  });
};

export default selectCategory;
