import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import FunnelChart from './components/FunnelChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import PositiveAndNegativeBarChart from './components/PositiveAndNegativeBarChart';
import PieChartWithCustomizedLabel from './components/PieChartWithCustomizedLabel';
import PieChartWithPaddingAngle from './components/PieChartWithPaddingAngle';
import SimpleRadarChart from './components/SimpleRadarChart';
import SimpleRadialBarChart from './components/SimpleRadialBarChart';
import CustomContentTreemap from './components/CustomContentTreemap';
import LineBarAreaComposedChart from './components/LineBarAreaComposedChart';

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
              <PositiveAndNegativeBarChart />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <PieChart />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <PieChartWithCustomizedLabel />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <PieChartWithPaddingAngle />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <SimpleRadarChart />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <SimpleRadialBarChart />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <FunnelChart />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <LineChart />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <CustomContentTreemap />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <LineBarAreaComposedChart />
            </Col>
          </Row>
        </Grid>
      )
  }
}
export default DashboardLayout;