import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import SearchBar from './components/SearchBar';

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
            <Col xs={12}>
              <SearchBar />
            </Col>
          </Row>
        </Grid>
      )
  }
}
export default DashboardLayout;