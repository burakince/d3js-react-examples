import React, { Component } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import datas from './datas';

class LineBarAreaComposedChartComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <ComposedChart data={datas} margin={{top: 5, right: 5, bottom: 5, left: 5}}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke='#f5f5f5' />
            <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8' />
            <Bar dataKey='pv' barSize={20} fill='#413ea0' />
            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
         </ComposedChart>
      </ResponsiveContainer>
    )
  }
}
export default LineBarAreaComposedChartComponent;