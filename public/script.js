async function getData() {
  console.log('data request');
  const dining = document.querySelector('#dining');
  const request = await fetch('http://localhost:3000/api/dining', {method: 'GET', mode: 'no-cors'});
  const tableData = await request.json();
  return tableData;

  // window.addEventListener('load', (event) => {
  //   console.log('page loaded');
  // });
  const appendItem = document.createElement('td');
  appendItem.classList.add('dining');
}

window.onload = getData;
