function addData() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const address = document.getElementById('address').value;

  if (firstname == '' || lastname == '' || address == '') {
    alert('Please enter something first!');
  } else {
    let html = '';

    html = `<tr><td>${firstname}</td><td>${lastname}</td><td>${address}</td></tr>`;

    document.getElementById('result').innerHTML += html;

    document.querySelector('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('address').value = '';
  }
}
