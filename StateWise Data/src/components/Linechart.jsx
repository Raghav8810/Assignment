import { useState } from 'react';

import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const [series, setSeries] = useState([{
    name: "Desktops",
    data: [5000,10000,15000,20000,25000]
  }]);
  
  const [options] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Fund Performance',
      align: 'center'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    }
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="line" width={400} height={400} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default LineChart;
