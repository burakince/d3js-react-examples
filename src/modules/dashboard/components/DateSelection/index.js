import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class DateSelection extends Component {
  constructor(props) {
     super(props);

     this.state = { value: 'today' };
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
      <Grid>
        <Row>
          <Col xs={6} sm={4} md={3}>
            <Select
              name="date-selection"
              value={this.state.value}
              options={options}
              clearable={false}
              searchable={false}
              onChange={this.updateState.bind(this)}
            />
          </Col>
          <Col xs={6} sm={8} md={9}>
            Search Box
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default DateSelection;