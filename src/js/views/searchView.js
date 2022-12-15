import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search');

  getQueryString() {
    const queryString =
      this._parentElement.querySelector('.search__field').value;
    this._clearInput();

    return queryString;
  }

  _clearInput() {
    return (this._parentElement.querySelector('.search__field').value = '');
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
