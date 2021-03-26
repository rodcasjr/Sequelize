async function getData() {
  console.log('data request');
  // const dining = document.querySelector('dining');
  const request = await fetch('http://localhost:3000/api/DiningHall', {method: 'GET'});
  const tableData = await request.json();
  return tableData;
}
async function windowActions() {
  console.log('loaded window');
  const data = await getData();
  console.table(data);
}

window.onload = windowActions;



  // const parentElement = document.getElementById('table');
  // console.log(parentElement);



  // function generateTableHead(table) {
  //   const thead = table.createTHead();
  //   const row = thead.insertRow();
  //   for (const key of data) {
  //     const th = document.createElement('th');
  //     const text = document.createTextNode(key);
  //     th.appendChild(text);
  //     row.appendChild(th);
  //   }
  // }

  // function generateTable(table, data) {
  //   for (const element of data) {
  //     const row = table.insertRow();
  //     for (key in element) {
  //       const cell = row.insertCell();
  //       const text = document.createTextNode(element[key]);
  //       cell.appendChild(text);
  //     }
  //   }
  // }

  // const table = document.querySelector('table');
  // // let data = Object.keys(tableData[0]);
  // generateTableHead(table, tableData);
  // generateTable(table, tableData);

  // tableData.data.forEach((restaurant) => {
  //   const appendItem = document.createElement('div');
  //   // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
  //   appendItem.innerHTML =
  //   `<tr>${restaurant.hall_id}</tr>
  //     <br/>
  //     <tr>${restaurant.hall_name}</tr>
  //     <br/>
  //     <tr>${restaurant.hall_address}</tr>`
  // }).append('');
  //   dining.innerHTML = html;
  //   // targetBox.append(appendItem);
  // };







  //   function addData(tableData) {
  //     const parentElement = document.getElementById('dining');
  //     console.log(parentElement);
  //     const hallId = document.querySelector('hall_id').value;
  //     const hallName = document.querySelector('hall_name').value;
  //     const hallAddress = document.querySelector('hall_address').value;
  //     console.log(hallId);

  //     const html = ' ';
  //     return `<tr><td>${hallId.value}</td><td>${hallName.value}</td><td>${hallAddress.value}</td></tr>`;
  //       document.getElementById('dining').innerHTML += html;

  //       document.querySelector('hall_id').value = '';
  //       document.querySelecto('hall_name').value = '';
  //       document.querySelecto('hall_address').value = '';
  //   }

//   window.onload = addData;
