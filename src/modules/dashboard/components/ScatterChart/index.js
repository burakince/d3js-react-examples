import React, { Component } from 'react';
import { ResponsiveContainer, ScatterChart, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';

import datas1 from './datas1';
import datas2 from './datas2';

class ScatterChartComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <ScatterChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <ZAxis dataKey="z" range={[4, 20]} name="score" unit="km" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={datas1} fill="#8884d8" />
          <Scatter name="B school" data={datas2} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    )
  }
}
export default ScatterChartComponent;