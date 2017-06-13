import React, { Component } from 'react';
import D3Funnel from 'd3-funnel';

class FunnelChartComponent extends Component {
  constructor(props){
    super(props)
    this.createFunnelChart = this.createFunnelChart.bind(this);
  }

  componentDidMount() {
    this.createFunnelChart();
  }

  componentDidUpdate() {
    this.createFunnelChart();
  }

  createFunnelChart() {
    const data = [
      ['Plants', 10000],
      ['Flowers', 6000],
      ['Perennials', 3000],
      ['Roses', 1000],
    ];

    const options = { 
      chart: {
        width : 220,
        height: 340,
        bottomWidth: 1 / 1.5,
        curve: {
          enabled: true,
          height: 40
        },
        bottomPinch: 1,
        animate: 200,
      },
      block: {
        dynamicHeight: true,
        minHeight: 25,
        fill: {
          type: 'gradient',
        },
        highlight: true,
        barOverlay: true,
        // dynamicSlope: true
      },
      label: {
        format: '{f} {l}',
      },
      events: {
        click: {
          block(d) {
            alert(d.label.raw);
          },
        },
      },
    };

    const chart = new D3Funnel('#funnel');
    chart.draw(data, options);
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div id="funnel"></div>
      </div>
    )
  }
}
export default FunnelChartComponent;