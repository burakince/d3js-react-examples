import React, { Component } from 'react';

import DashboardLayout from './dashboard/DashboardLayout';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <DashboardLayout />
        <Footer />
      </div>
    )
  }
}
export default App;