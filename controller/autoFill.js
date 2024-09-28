import walmartFormDataModel from '../model/walmartFormDataModel.js';

document.addEventListener('DOMContentLoaded', function () {
  const autoFillButton = document
    .getElementById('autoFillButton')
    .addEventListener('click', function (event) {
      event.preventDefault();

      chrome.storage.local.get(['walmartFormData'], function (result) {
        if (result.walmartFormData) {
          const parsedData = result.walmartFormData;

          const walmartFormData = mapParsedJsonToWalmartFormData(parsedData);

          const input = document.getElementById(
            'd8024f175e991014c862a2c5ba770000'
          );
          if (input) {
            input.value = walmartFormData.firstName;
          }

          console.log('Retrieved Walmart Form Data:', walmartFormData);
        } else {
          console.log('No data found in Chrome storage.');
        }
      });
    });
});

function mapParsedJsonToWalmartFormData(parsedData) {
  return new walmartFormDataModel(
    parsedData.firstName,
    parsedData.lastName,
    parsedData.email,
    parsedData.birthCountry,
    parsedData.residingCountry,
    parsedData.citizenshipCountry,
    parsedData.degree,
    parsedData.fieldOfStudy,
    parsedData.highestDegree,
    parsedData.eadCard,
    parsedData.eadType,
    parsedData.visaCheckBoxValue,
    parsedData.visaExpirationDate,
    parsedData.h1CapExempt,
    parsedData.usWorkAuthorization,
    parsedData.previouslyH1B,
    parsedData.timeSpentH1B,
    parsedData.l1StatusEadType,
    parsedData.currentEmployed,
    parsedData.i140,
    parsedData.i485,
    parsedData.j1
  );
}
