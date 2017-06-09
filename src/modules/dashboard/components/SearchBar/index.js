import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import DateSelection from '../DateSelection';
import SearchBox from '../SearchBox';

class SearchBar extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} sm={4} md={3}>
            <DateSelection />
          </Col>
          <Col xs={6} sm={8} md={9}>
            <SearchBox />
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default SearchBar;