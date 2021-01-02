import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'January', uv: 900, pv: 2400, amt: 2400,
  },
  {
    name: 'February', uv: 1300, pv: 1398, amt: 2210,
  },
  {
    name: 'March', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'April', uv: 2380, pv: 3908, amt: 2000,
  },
  {
    name: 'May', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'June', uv: 1790, pv: 3800, amt: 2500,
  },
  {
    name: 'July', uv: 2290, pv: 4300, amt: 2100,
  },
  {
    name: 'August', uv: 2590, pv: 4300, amt: 2100,
  },
  {
    name: 'September', uv: 3090, pv: 4300, amt: 2100,
  },
  {
    name: 'October', uv: 3490, pv: 4300, amt: 2100,
  },
];

const SellAreaChart = () => {
    return (
        <div>
            <AreaChart
                width={800}
                height={400}
                data={data}
                margin={{
                top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
        </div>
    )
}

export default SellAreaChart;
