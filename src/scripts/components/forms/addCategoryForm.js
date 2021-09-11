import { clearDom } from '../../helpers/clearDom';

const addCategoryForm = (catObj) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <form id="form-create-cat" class="mb-4 form-css">
        <div class="form-group row">
        <div class="form-title"><h2>Create New Category</h2></div>
          <label for="word" class="col-sm-2 col-form-label">Category:</label>
          <div class="col-sm-10">
          <input type="text" class="form-control" id="category-input" aria-describedby="term" placeholder="Enter Category" value='${catObj.cat_name || ''}'required>
          </div>
        </div>
        <button type="submit" id="${catObj.firebaseKey ? `update-category--${catObj.firebaseKey}` : 'cate-submit'}" class="btn btn-outline-dark submit-btn">Submit Category</button>
      </form>`;
};

export default addCategoryForm;
