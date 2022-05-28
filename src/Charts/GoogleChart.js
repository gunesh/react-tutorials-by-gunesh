import React, { Component } from 'react';
import Chart from 'react-google-charts';
const data = [
  ['Year', 'Visitations', { role: 'style' }],
  ['2010', 10, 'color: gray'],
  ['2020', 14, 'color: #76A7FA'],
  ['2030', 16, 'opacity: 0.2'],
  ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
  [
    '2050',
    28,
    'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2',
  ],
];

export const data1 = [
  [
    'Month',
    'Bolivia',
    'Ecuador',
    'Madagascar',
    'Papua New Guinea',
    'Rwanda',
    'Average',
  ],
  ['2004/05', 165, 938, 522, 998, 450, 614.6],
  ['2005/06', 135, 1120, 599, 1268, 288, 682],
  ['2006/07', 157, 1167, 587, 807, 397, 623],
  ['2007/08', 139, 1110, 615, 968, 215, 609.4],
  ['2008/09', 136, 691, 629, 1026, 366, 569.6],
];

export const options1 = {
  title: 'Monthly Coffee Production by Country',
  vAxis: { title: 'Cups' },
  hAxis: { title: 'Month' },
  seriesType: 'bars',
  series: { 5: { type: 'line' } },
};

export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options2 = {
  title: "My Daily Activities",
  is3D: true,
};



class GoogleChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container mt-5">
        <Chart
          width={700}
          height={320}
          data={data}
          chartType="ColumnChart"
          loader={<div>Loading Chart...</div>}
        />

        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={data1}
          options={options1}
        />


<Chart
      chartType="PieChart"
      data={data2}
      options={options2}
      width={"100%"}
      height={"400px"}
    />


      </div>
    );
  }
}

export default GoogleChart;
