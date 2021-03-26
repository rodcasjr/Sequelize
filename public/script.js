async function getData() {
  // console.log('data request');
  const dining = document.querySelector('#dining');
  const request = await fetch('/api/dining', {method: 'GET'});
  console.log(request);
  const tableData = await request.json();
  console.table(tableData.data);

  tableData.data.forEach((restaurant) => {
    const appendItem = document.createElement('div');
    // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML =
    `<tr>${restaurant.hall_id}</tr>
      <br/>
      <tr>${restaurant.hall_name}</tr>
      <br/>
      <tr>${restaurant.hall_address}</tr>`;
  }).join('');
    dining.innerHTML = html;
    // targetBox.append(appendItem);
};



//   function addData() {
//     const hallId = document.getElementById('hallId').value;
//     const hallName = document.getElementById('hallName').value;
//     const hallAddress = document.getElementById('hallAddress').value;

//     let html = ' ';
//     html = `<tr><td>${hallId.value.data}</td><td>${hallName.value.data}</td><td>${hallAddress.value.data}</td></tr>`;

//     document.getElementById('result').innerHTML += html;

//     document.getElementById('hallId').value = '';
//     document.getElementById('hallName').value = '';
//     document.getElementById('hallAddress').value = '';
//   }
//   window.onload = addData;
// }

window.onload = getData;
