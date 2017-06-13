import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import DateSelection from '../../containers/DateSelection';
import SearchBox from '../SearchBox';

import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <Grid id="search-bar">
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