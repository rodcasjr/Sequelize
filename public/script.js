async function getData() {
  console.log('data request');
  const result = document.querySelector('#result');
  const request = await fetch('http://localhost:3000/api/dining');
  const tableData = await request.json();
  // return tableData;

  tableData.data.forEach((restaurant) => {
    console.log(restaurant);
    const appendItem = document.createElement('tr');
    // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
      <td>
        ${restaurant.hall_id}
      </td>
      
      <td>
        ${restaurant.hall_name}
      </td>
      
      <td>
      ${restaurant.hall_address}
      </td>`;
    result.append(appendItem);
  });
}
window.onload = getData;
// class="has-text-light"
// class="title is-child box has-background-link-dark"
// class="subtitle has-text-light has-text-weight-bold"
