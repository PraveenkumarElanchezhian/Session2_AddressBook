let addressBookDataList;

window.addEventListener('DOMContentLoaded', (event) => {
    addressBookDataList = getAddressBookDataFromStorage();
  document.querySelector('.emp-count').textContent = addressBookDataList.length;
  createInnerHtml();
  localStorage.removeItem('editEmp');
});

const getAddressBookDataFromStorage = () => {
  return localStorage.getItem('AddressBookList') ? JSON.parse(localStorage.getItem('AddressBookList')) : [];
};

const createInnerHtml = () => {

    const headerHtml = 
      ` 
        <th>FullName</th>
        <th>Phone</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>zipCode</th>`;
    let innerHtml = `${headerHtml}`;
  
    for (const addressBookData of addressBookDataList) {
      innerHtml = `${innerHtml}
        <tr>
          <td>${addressBookData._firstname}</td>
          <td>${addressBookData._phonenumber}</td>
          <td>${addressBookData._address}</td>
          <td>${getCityHtml(addressBookData._city)}</td>
          <td>${getStateHtml(addressBookData._state)}</td>
          <td>${addressBookData._zipCode}</td>
       
        </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
  };


  const getCityHtml = (cityList) => {
    let cityHtml = '';
    for (const city of cityList) {
        cityHtml = `${cityHtml} <div class='dept-label'>${city}</div>`
    }
    return cityHtml
  };

  const getStateHtml = (stateList) => {
    let stateHtml = '';
    for (const state of stateList) {
        stateHtml = `${stateHtml} <div class='dept-label'>${state}</div>`
    }
    return stateHtml
  };