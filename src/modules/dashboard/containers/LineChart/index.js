import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class LineChartComponent extends Component {
  render() {
    return (
      <ResponsiveContainer minWidth={260} minHeight={240}>
        <LineChart data={this.props.models} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="Model_ID" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="Model_Name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    models: state.models
  }
}

export default connect(mapStateToProps)(LineChartComponent);