import React, { Component } from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class DateSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'today'
    };
  }

  updateState(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    var options = [
      { value: 'today', label: 'Bugun', className: 'State-Today' },
      { value: 'week', label: 'Bu Hafta', className: 'State-Week' },
      { value: 'month', label: 'Bu Ay', className: 'State-Month' }
    ];

    return (
      <Select
        name="date-selection"
        value={this.state.value}
        options={options}
        clearable={false}
        searchable={false}
        onChange={this.updateState.bind(this)}
      />
    )
  }
}
export default DateSelection;