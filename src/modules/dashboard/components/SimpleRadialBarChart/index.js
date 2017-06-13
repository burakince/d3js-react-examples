import React, { Component } from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

import datas from './datas';

const style = {
  top: 0,
  left: 0,
  lineHeight: '24px'
};

class SimpleRadialBarChartComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <RadialBarChart data={datas} innerRadius={20} outerRadius={120} barSize={10}>
          <RadialBar minAngle={15} label background clockWise={true} dataKey='uv' />
          <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style} />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    )
  }
}
export default SimpleRadialBarChartComponent;