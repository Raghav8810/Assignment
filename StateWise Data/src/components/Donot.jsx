import { useState } from "react";
import ReactApexChart from "react-apexcharts";


const Donot = () => {
     //pie donot chart data
  const [chartData, setChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });
  return (
   <>
   <div id="chart" className='chart'>
   <ReactApexChart options={chartData.options} series={chartData.series} width={400} height={400} className="donot" type="donut" />
 </div>
    <div id="html-dist"></div>
   </>
  )
}

export default Donot;
