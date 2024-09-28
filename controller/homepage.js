document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('openQuestionnaire')
    .addEventListener('click', function (event) {
      event.preventDefault();
      window.location.href = 'view/questionnaire.html';
    });
});
