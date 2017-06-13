import React, { Component } from 'react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

import datas from './datas';

class SimpleRadarChartComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <RadarChart outerRadius={100} data={datas}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    )
  }
}
export default SimpleRadarChartComponent;