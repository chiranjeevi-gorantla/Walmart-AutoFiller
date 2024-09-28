class walmartFormDataModel {
  constructor(
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
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthCountry = birthCountry;
    this.residingCountry = residingCountry;
    this.citizenshipCountry = citizenshipCountry;
    this.degree = degree;
    this.fieldOfStudy = fieldOfStudy;
    this.highestDegree = highestDegree;
    this.eadCard = eadCard;
    this.eadType = eadType;
    this.visaCheckBoxValue = visaCheckBoxValue;
    this.visaExpirationDate = visaExpirationDate;
    this.h1CapExempt = h1CapExempt;
    this.usWorkAuthorization = usWorkAuthorization;
    this.previouslyH1B = previouslyH1B;
    this.timeSpentH1B = timeSpentH1B;
    this.l1StatusEadType = l1StatusEadType;
    this.currentEmployed = currentEmployed;
    this.i140 = i140;
    this.i485 = i485;
    this.j1 = j1;
  }

  getFirstName() {
    return this.firstName;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getLastName() {
    return this.lastName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getBirthCountry() {
    return this.birthCountry;
  }

  setBirthCountry(birthCountry) {
    this.birthCountry = birthCountry;
  }

  getResidingCountry() {
    return this.residingCountry;
  }

  setResidingCountry(residingCountry) {
    this.residingCountry = residingCountry;
  }

  getCitizenshipCountry() {
    return this.citizenshipCountry;
  }

  setCitizenshipCountry(citizenshipCountry) {
    this.citizenshipCountry = citizenshipCountry;
  }

  getDegree() {
    return this.degree;
  }

  setDegree(degree) {
    this.degree = degree;
  }

  getFieldOfStudy() {
    return this.fieldOfStudy;
  }

  setFieldOfStudy(fieldOfStudy) {
    this.fieldOfStudy = fieldOfStudy;
  }

  getHighestDegree() {
    return this.highestDegree;
  }

  setHighestDegree(highestDegree) {
    this.highestDegree = highestDegree;
  }

  getEadCard() {
    return this.eadCard;
  }

  setEadCard(eadCard) {
    this.eadCard = eadCard;
  }

  getEadType() {
    return this.eadType;
  }

  setEadType(eadType) {
    this.eadType = eadType;
  }

  getVisaCheckBoxValue() {
    return this.visaCheckBoxValue;
  }

  setVisaCheckBoxValue(visaCheckBoxValue) {
    this.visaCheckBoxValue = visaCheckBoxValue;
  }

  getVisaExpirationDate() {
    return this.visaExpirationDate;
  }

  setVisaExpirationDate(visaExpirationDate) {
    this.visaExpirationDate = visaExpirationDate;
  }

  getH1CapExempt() {
    return this.h1CapExempt;
  }

  setH1CapExempt(h1CapExempt) {
    this.h1CapExempt = h1CapExempt;
  }

  getUsWorkAuthorization() {
    return this.usWorkAuthorization;
  }

  setUsWorkAuthorization(usWorkAuthorization) {
    this.usWorkAuthorization = usWorkAuthorization;
  }

  getPreviouslyH1B() {
    return this.previouslyH1B;
  }

  setPreviouslyH1B(previouslyH1B) {
    this.previouslyH1B = previouslyH1B;
  }

  getTimeSpentH1B() {
    return this.timeSpentH1B;
  }

  setTimeSpentH1B(timeSpentH1B) {
    this.timeSpentH1B = timeSpentH1B;
  }

  getL1StatusEadType() {
    return this.l1StatusEadType;
  }

  setL1StatusEadType(l1StatusEadType) {
    this.l1StatusEadType = l1StatusEadType;
  }

  getCurrentEmployed() {
    return this.currentEmployed;
  }

  setCurrentEmployed(currentEmployed) {
    this.currentEmployed = currentEmployed;
  }

  getI140() {
    return this.i140;
  }

  setI140(i140) {
    this.i140 = i140;
  }

  getI485() {
    return this.i485;
  }

  setI485(i485) {
    this.i485 = i485;
  }

  getJ1() {
    return this.j1;
  }

  setJ1(j1) {
    this.j1 = j1;
  }

  toString() {
    return `
        WalmartFormData {
          firstName: ${this.firstName},
          lastName: ${this.lastName},
          email: ${this.email},
          birthCountry: ${this.birthCountry},
          residingCountry: ${this.residingCountry},
          citizenshipCountry: ${this.citizenshipCountry},
          degree: ${this.degree},
          fieldOfStudy: ${this.fieldOfStudy},
          highestDegree: ${this.highestDegree},
          eadCard: ${this.eadCard},
          eadType: ${this.eadType},
          visaCheckBoxValue: ${this.visaCheckBoxValue},
          visaExpirationDate: ${this.visaExpirationDate},
          h1CapExempt: ${this.h1CapExempt},
          usWorkAuthorization: ${this.usWorkAuthorization},
          previouslyH1B: ${this.previouslyH1B},
          timeSpentH1B: ${this.timeSpentH1B},
          l1StatusEadType: ${this.l1StatusEadType},
          currentEmployed: ${this.currentEmployed},
          i140: ${this.i140},
          i485: ${this.i485},
          j1: ${this.j1}
        }
      `;
  }
}

export default walmartFormDataModel;
