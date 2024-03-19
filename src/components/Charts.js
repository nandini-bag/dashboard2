import React,{useState} from 'react';
import Chart from "react-apexcharts";

const Charts=({alignMenu})=>{
    const [state,setState]=useState( {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [30, 50, 48, 80, 90, 69, 90, 91]
          }
        ]
      })
    return(
        <>
            <div id='charts-container' className={alignMenu ? 'align' : ''}>
                <div className='bar-chart chart'>
                <h2>bar chart</h2>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="500"
                />
                </div>
                <div className='area-chart chart'>
                <h2>area chart</h2>
                <Chart
                    options={state.options}
                    series={state.series}
                    type="area"
                    width="500"
                />
                </div>
            </div>
        </>
    );
}
export default Charts;