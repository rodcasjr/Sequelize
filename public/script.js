async function getMeals() {
  console.log('data request');
  // const result = document.querySelector('#result');
  const request = await fetch('/api/meals');
  const mealData = await request.json();
  return mealData;
}
async function windowActions() {
  console.log('load window');
  const meals = await getMeals();
  console.table(meals);
}

// mealData.data.forEach((meals) => {
//   console.log(meals);
//   const appendItem = document.createElement('tr');
//   // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
//   appendItem.innerHTML = `
//     <td>
//       ${restaurant.hall_id}
//     </td>
//     <td>
//       ${restaurant.hall_name}
//     </td>
//     <td>
//     ${restaurant.hall_address}
//     </td>`;
//   result.append(appendItem);
// });

window.onload = windowActions;

// class="has-text-light"
// class="title is-child box has-background-link-dark"
// class="subtitle has-text-light has-text-weight-bold"

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

window.onload = function () {
  const chart = new CanvasJS.Chart('chart', {
    animationEnabled: true,
    title: {
      text: 'Evening Sales in a Restaurant'
    },
    axisX: {
      valueFormatString: 'DDD'
    },
    axisY: {
      prefix: '$'
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries
    },
    data: [{
      type: 'stackedBar',
      name: 'Meals',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 56 },
        { x: new Date(2017, 0, 31), y: 45 },
        { x: new Date(2017, 1, 1), y: 71 },
        { x: new Date(2017, 1, 2), y: 41 },
        { x: new Date(2017, 1, 3), y: 60 },
        { x: new Date(2017, 1, 4), y: 75 },
        { x: new Date(2017, 1, 5), y: 98 }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Snacks',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 86 },
        { x: new Date(2017, 0, 31), y: 95 },
        { x: new Date(2017, 1, 1), y: 71 },
        { x: new Date(2017, 1, 2), y: 58 },
        { x: new Date(2017, 1, 3), y: 60 },
        { x: new Date(2017, 1, 4), y: 65 },
        { x: new Date(2017, 1, 5), y: 89 }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Drinks',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 48 },
        { x: new Date(2017, 0, 31), y: 45 },
        { x: new Date(2017, 1, 1), y: 41 },
        { x: new Date(2017, 1, 2), y: 55 },
        { x: new Date(2017, 1, 3), y: 80 },
        { x: new Date(2017, 1, 4), y: 85 },
        { x: new Date(2017, 1, 5), y: 83 }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Dessert',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 61 },
        { x: new Date(2017, 0, 31), y: 55 },
        { x: new Date(2017, 1, 1), y: 61 },
        { x: new Date(2017, 1, 2), y: 75 },
        { x: new Date(2017, 1, 3), y: 80 },
        { x: new Date(2017, 1, 4), y: 85 },
        { x: new Date(2017, 1, 5), y: 105 }
      ]
    },
    {
      type: 'stackedBar',
      name: 'Takeaway',
      showInLegend: 'true',
      xValueFormatString: 'DD, MMM',
      yValueFormatString: '$#,##0',
      dataPoints: [
        { x: new Date(2017, 0, 30), y: 52 },
        { x: new Date(2017, 0, 31), y: 55 },
        { x: new Date(2017, 1, 1), y: 20 },
        { x: new Date(2017, 1, 2), y: 35 },
        { x: new Date(2017, 1, 3), y: 30 },
        { x: new Date(2017, 1, 4), y: 45 },
        { x: new Date(2017, 1, 5), y: 25 }
      ]
    }]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
};
