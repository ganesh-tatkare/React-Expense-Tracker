import './Chart.css';

const Chart = props => {

    const datavalue = props.chartDataPoints.map(datapoint => datapoint.value);
    let sum = 0;
    for (const val in datavalue) {
        sum += datavalue[val];
    };

    return (
        <div className='chart-bar'>
            {
                props.chartDataPoints.map((dataPoint) => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={sum}
                        label={dataPoint.label}
                    />
                ))
            }
        </div>
    )
};

const ChartBar = props => {

    let barFillHeight = "0%";
    if (props.maxValue > 0) {
        barFillHeight = (props.value / props.maxValue) * 100 + "%";
    };
    
    return (
        <div >
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default Chart;