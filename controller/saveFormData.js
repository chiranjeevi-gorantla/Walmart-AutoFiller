// This JS file saves the data to the localStorage
import walmartFormDataModel from '../model/walmartFormDataModel.js';

document
  .getElementById('walmartForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const birthCountry = document.getElementById('birthCountry').value;
    const residingCountry = document.getElementById('residingCountry').value;
    const citizenshipCountry =
      document.getElementById('citizenshipCountry').value;
    const degree = document.getElementById('degree').value;
    const fieldOfStudy = document.getElementById('fieldOfStudy').value;
    const highestDegree = document.getElementById('highestDegree').value;
    const eadCard = document.getElementById('eadCard').value;
    const eadExpirationDate =
      document.getElementById('eadExpirationDate').value;
    const eadType = document.getElementById('eadType').value;
    const visaCheckBoxValue = getVisaCheckBoxValue();
    const visaExpirationDate = getvisaExpirationDate();
    const h1CapExempt = document.getElementById('h-1CapExempt').value;
    const usWorkAuthorization = document.getElementById(
      'USWorkAuthorization'
    ).value;
    const previouslyH1B = document.getElementById('previouslyH1B').value;
    const timeSpentH1B = document.getElementById('timeSpentH1B').value;
    const l1StatusEadType = document.getElementById('l-1Status').value;
    const currentEmployed = document.getElementById('currentEmployed').value;
    const i140 = document.getElementById('i-140').value;
    const i485 = document.getElementById('i-485').value;
    const j1 = document.getElementById('j-1').value;

    const walmartFormData = new walmartFormDataModel(
      firstName,
      lastName,
      email,
      birthCountry,
      residingCountry,
      citizenshipCountry,
      degree,
      fieldOfStudy,
      highestDegree,
      eadCard,
      eadType,
      visaCheckBoxValue,
      visaExpirationDate,
      h1CapExempt,
      usWorkAuthorization,
      previouslyH1B,
      timeSpentH1B,
      l1StatusEadType,
      currentEmployed,
      i140,
      i485,
      j1
    );

    chrome.storage.local.set({ walmartFormData: walmartFormData }, () => {
      console.log(walmartFormData);
    });

    // localStorage.setItem('walmartFormData', JSON.stringify(walmartFormData));

    document.getElementById('statusMessage').textContent =
      'Form data saved successfully to localStorage!';
    document.getElementById('walmartForm').reset();
  });

function getVisaCheckBoxValue() {
  const selectedCheckbox = document.querySelector(
    'input[name="visaOptions"]:checked'
  );
  const selectedValue = selectedCheckbox.value;
  return selectedValue;
}

document.querySelectorAll('input[name="visaOptions"]').forEach((checkbox) => {
  checkbox.addEventListener('change', getVisaCheckBoxValue);
});

function getvisaExpirationDate() {
  const retrivedDate = document.getElementById('visaExpirationDate');
  const selectedDate = retrivedDate.value;
  return selectedDate;
}

document
  .getElementById('visaExpirationDate')
  .addEventListener('change', function () {
    getvisaExpirationDate();
  });

document
  .getElementById('goToHomepage')
  .addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../index.html';
  });
