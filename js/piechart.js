google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Race', 'Percentage'],
    ['White',     69],
    ['Asian',      18],
    ['Black & Latino',  13]
  ]);

  var options = {
    pieSliceBorderColor: 'black',
    slices: {
      0: { color: '#f2bb80', offset: 0.07} ,
      1: { color: '#4398d1', offset: 0.1} ,
      2: { color: '#c893fa', offset: 0.1 }
    },
    legend: 'none',
    // pieSliceText: 'label',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}