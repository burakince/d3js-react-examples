import React, { Component } from 'react';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectDate } from '../../actions/';

import 'react-select/dist/react-select.css';

class DateSelection extends Component {
  updateState(newValue) {
    this.props.selectDate(newValue);
  }

  render() {
    return (
      <Select
        name="date-selection"
        value={this.props.activeDate.value}
        options={this.props.dates}
        clearable={false}
        searchable={false}
        onChange={this.updateState.bind(this)}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    dates: state.dates,
    activeDate: state.activeDate
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectDate: selectDate
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(DateSelection);