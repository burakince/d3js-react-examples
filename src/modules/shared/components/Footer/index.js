import React from 'react';
import {Footer} from 'react-materialize';

class PageFooter extends React.Component {
  render() {
    return (
      <Footer copyrights="&copy; 2017 Copyright Text">
        <h5 className="white-text">Footer Content</h5>
	    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </Footer>
    )
  }
}
export default PageFooter;
