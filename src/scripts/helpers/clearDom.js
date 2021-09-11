const clearDom = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

const clearCategory = () => {
  document.querySelector('#category-div').innerHTML = '';
};
export { clearDom, clearCategory };
