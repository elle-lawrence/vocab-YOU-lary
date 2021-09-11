const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar navbar-dark" style="background-color: #556E53;">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
  <img src="/images/wordology.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
  Vocab-YOU-lary
</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a id="all-terms" class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a id="my-glossary" class="nav-link" href="#">My Glossary</a>
        </li>
        <li class="nav-item">
          <a id="create-new" class="nav-link" href="#">Create Term</a>
        </li>
        <li class="nav-item">
          <a id="category-create" class="nav-link" href="#">Create Category</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Word" aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
      <div id='logout-button'></div>
    </div>
  </div>
</nav>
    `;
};

export default navBar;
