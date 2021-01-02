import React from 'react'
import PiChart from './PiChart'
import SellAreaChart from './SellAreaChart'

const ChartSection = () => {
    return (
        <div className="dashboard__chart">
            <div>
                <SellAreaChart />
            </div>
            <div>
                <PiChart />
            </div>
        </div>
    )
}

export default ChartSection
