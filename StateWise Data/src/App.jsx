
import { useState } from 'react';
import './index.css'
import ReactApexChart from 'react-apexcharts';
import LineChart from './components/Linechart';
import Donot from './components/Donot';
    
    
  

function App(){
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "treemap",
    },
    series: [
      {
        data: [
          { x: 'New Delhi', y: 218 },
          { x: 'Kolkata', y: 149 },
          { x: 'Mumbai', y: 184 },
          { x: 'Ahmedabad', y: 55 },
          { x: 'Bangaluru', y: 84 },
          { x: 'Pune', y: 31 },
          { x: 'Chennai', y: 30 },
          { x: 'Jaipur', y: 30 },
          { x: 'Surat', y: 44 },
          { x: 'Hyderabad', y: 35 },
          { x: 'Lucknow', y: 28 },
          { x: 'Indore', y: 19 },
          { x: 'Kanpur', y: 29 }
        ]
      },
    ],
    plotOptions: {
      treemap: {
        distributed: true
      }
    }
  });


 


  return (
    <>
       <div className='main'>
          <div className='container'>
          <h1 className="heading">Treemap</h1>
                <div className="tree-map">
                    <div id="chart">
                       <ReactApexChart options={options} series={options.series} type="treemap" className="maps" />
                       </div>
                     <div id="html-dist"></div>
                       </div>
            

                       <div className='detail-chart'>
                       <div className='donot'>
                       <h2>Asset Allocation</h2>
                             <Donot/>
                       
                            </div>

                            <div className='donot'>
                                   
                                 <LineChart/>
                       
                                  </div>
                          
                       </div>








                </div>
                </div>

    
    </>
  )
}

export default App
