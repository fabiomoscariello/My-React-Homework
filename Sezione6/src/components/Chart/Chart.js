import React from 'react';

import './Chart.css';

const Chart = props => {
    const dataPoingValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPoingValues);
    return (
    <div className='chart'>
        {props.dataPoint.map(dataPoint=>{
            <ChartBar 
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label}
            />
        })}
    </div>
  );
};

export default Chart;
