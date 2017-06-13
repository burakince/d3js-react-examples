import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';

import datas from './datas';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class PieChartWithPaddingAngleComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
          <Pie data={datas} nameKey="name" valueKey="value" dataKey="value" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5}>
            {
              datas.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
export default PieChartWithPaddingAngleComponent;