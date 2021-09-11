const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
<div id="navigation"></div>
<div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="category-div"></div>
    <div id="store"></div>
    <div id="view"></div>
</div>`;
};

export default domBuilder;
