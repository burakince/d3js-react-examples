import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import FunnelChart from './components/FunnelChart';
import PieChart from './components/PieChart';

class DashboardLayout extends Component {
  render() {
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <FunnelChart />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <PieChart />
            </Col>
          </Row>
        </Grid>
      )
  }
}
export default DashboardLayout;