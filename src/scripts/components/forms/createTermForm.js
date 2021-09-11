import { clearDom } from '../../helpers/clearDom';
import selectCategory from '../selectCategory';

const addTermForm = (obj) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-term-form" class="mb-4 form-css">
      <div class="form-group row">
      <div class="form-title"><h2>Create New Term</h2></div>
        <label for="word" class="col-sm-2 col-form-label">Term:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="term-input" aria-describedby="term" placeholder="Enter Term" value='${obj.term || ''}'required>
        </div>
      </div>  
      <div class="form-group row">
        <label for="definition" class="col-sm-2 col-form-label">Definition:</label>
        <div class="col-sm-10">
        <textarea class="form-control" id="definition" placeholder="Enter Definition" style="height: 100px" required>${obj.definition || ''}</textarea>
       </div>
      </div>
      <div class="form-group row dropdown-categories" id="select-category"></div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="favorite">Favorite</label>
      </div>
      <button type="submit" id="${obj.firebaseKey ? `update-term--${obj.firebaseKey}` : 'new-term-submit'}" class="btn btn-outline-dark submit-btn">Submit Term</button>
    </form>`;
  selectCategory(`${obj.category || ''}`);
  document.querySelector('#category-div').innerHTML = '';
};

export default addTermForm;
