import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import datas from './datas';

class LineChartComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <LineChart data={datas} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
export default LineChartComponent;