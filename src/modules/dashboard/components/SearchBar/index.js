import React, { Component } from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

class SearchBar extends Component {
  render() {
      return (
        <Grid>
          <Row>
            <Col xs={6} sm={4} md={3}>
              Search List
            </Col>
            <Col xs={6} sm={8} md={9}>
              Search Box
            </Col>
          </Row>
        </Grid>
      )
  }
}
export default SearchBar;