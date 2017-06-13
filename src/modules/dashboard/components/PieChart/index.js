import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

import datas1 from './datas1';
import datas2 from './datas2';

class PieChartComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <Pie data={datas1} nameKey="name" valueKey="value" dataKey="value" outerRadius={60} fill="#8884d8"/>
          <Pie data={datas2} nameKey="name" valueKey="value" dataKey="value" innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
export default PieChartComponent;