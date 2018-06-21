import React, { Component } from 'react';
import { connect } from 'react-redux';

import Markers from './Markers';

class StatefulMarkers extends Component {
  constructor(props) {
    super(props);
    this.onMarkerSelect = this.onMarkerSelect.bind(this);
  }

  onMarkerSelect(evt) {
    console.log('marker selected : ');
    console.log(evt);
    // this.props.fetchPOIDetail();
  }
  render() {
    // console.log('pois')
    // console.log(this.props.placesOfInterest)
    // console.log(this.onMarkerSelect)
    return (
      <Markers markersData={this.props.placesOfInterest} onMarkerSelect={this.onMarkerSelect} />
    )
  }
}

const mapStateToProps = ({placesOfInterest}) => ({ placesOfInterest });

export default connect(mapStateToProps)(StatefulMarkers);