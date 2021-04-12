function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
async function getMeals() {
  console.log('data request');
  const mealRequest = await fetch('/api/wholeMeal');
  const diningData = await mealRequest.json();
  return diningData;
}
// get random 10 meals //
async function windowActions() {
  console.log('loaded window');
  const results = await getMeals();
  const meals = results.data;

  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });
  console.log(selectedMeals);
  return selectedMeals;
}
  // get same random 10 meals and display bar chart//
function mealMacroCombo (selectedMeals, value) {
  console.log(selectedMeals);
  let nameMacro =[];
  selectedMeals.forEach((meal) => {
    let nameMacroDict = {y: '', label: ''};
    nameMacroDict.label = meal.meal_name;
    nameMacroDict.y = meal[value];
    nameMacro.push(nameMacroDict);
  });
  return nameMacro;
}
// function mealArrays (selectedMeals) {
//   let nameCalories = mealMacroCombo(selectedMeals, 'calories');
//   let nameCholesterol = mealMacroCombo(selectedMeals, 'cholesterol');
//   let nameSodium = mealMacroCombo(selectedMeals, 'sodium');
//   let nameCarbs = mealMacroCombo(selectedMeals, 'carbs');
//   let nameProtein = mealMacroCombo(selectedMeals, 'protein');
//   let nameFat = mealMacroCombo(selectedMeals, 'fat');
// }

window.onload = async function () {
  let chartData = await windowActions();
  // console.log(mealMacroCombo(chartData, 'calories'));
  const chart = new CanvasJS.Chart('chart', {
    animationEnabled: true,
    title: {
      text: '10 Random Meal Macros'
    },
    axisX: {
      // valueFormatString: 'DDD'
    },
    axisY: {
      // prefix: '$'
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
      name: 'calories',
      showInLegend: 'true',
      // xValueFormatString: 'DD, MMM',
      // yValueFormatString: '$#,##0',
      dataPoints: mealMacroCombo(chartData, 'calories')
    },
    {
      type: 'stackedBar',
      name: 'cholesterol',
      showInLegend: 'true',
      // xValueFormatString: 'DD, MMM',
      // yValueFormatString: '$#,##0',
      dataPoints: mealMacroCombo(chartData, 'cholesterol')
    },
    {
      type: 'stackedBar',
      name: 'sodium',
      showInLegend: 'true',
      // xValueFormatString: 'DD, MMM',
      // yValueFormatString: '$#,##0',
      dataPoints: mealMacroCombo(chartData, 'sodium')
    },
    {
      type: 'stackedBar',
      name: 'carbs',
      showInLegend: 'true',
      // xValueFormatString: 'DD, MMM',
      // yValueFormatString: '$#,##0',
      dataPoints: mealMacroCombo(chartData, 'carbs')
    },
    {
      type: 'stackedBar',
      name: 'protein',
      showInLegend: 'true',
      // xValueFormatString: 'DD, MMM',
      // yValueFormatString: '$#,##0',
      dataPoints: mealMacroCombo(chartData, 'protein')
    },
    {
      type: 'stackedBar',
      name: 'fat',
      showInLegend: 'true',
      // xValueFormatString: 'DD, MMM',
      // yValueFormatString: '$#,##0',
      dataPoints: mealMacroCombo(chartData, 'fat')
    }]
  });
  chart.render();
  console.log(chart);
  function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
};
