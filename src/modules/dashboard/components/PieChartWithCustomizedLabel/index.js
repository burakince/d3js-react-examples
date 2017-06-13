import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';

import datas from './datas';

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class PieChartWithCustomizedLabelComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie data={datas} nameKey="name" valueKey="value" dataKey="value" labelLine={false} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8">
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
export default PieChartWithCustomizedLabelComponent;