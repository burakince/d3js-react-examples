import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DateSelection from './components/DateSelection';

class DashboardLayout extends Component {
  render() {
      return (
        <Grid>
          <Row>
            <Col xs={12} sm={3} md={3}>
              <DateSelection />
            </Col>
          </Row>
        </Grid>
      )
  }
}
export default DashboardLayout;