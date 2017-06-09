import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Footer.css';

class PageFooter extends Component {
  render() {
    return (
      <footer className="footer">
      	<Grid>
          <Row>
            <Col xs={12}>
              <span>&nbsp;</span>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}
export default PageFooter;
