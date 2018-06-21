import React, { Component } from 'react';
import { connect } from 'react-redux';

import Markers from './Markers';
// import {fetchPOIs, fetchPOIDetail} from '../../../redux/placesOfInterest';
import {fetchPOIs} from '../../../redux/placesOfInterest';

class StatefulMarkers extends Component {
  constructor(props) {
    super(props);
    this.onMarkerSelect = this.onMarkerSelect.bind(this);
  }
  componentDidMount() {
    this.props.fetchPOIs();
  }
  onMarkerSelect(evt) {
    console.log('marker selected : ');
    console.log(evt);
    // this.props.fetchPOIDetail();
  }
  render() {
    console.log('pois')
    console.log(this.props.placesOfInterest)
    console.log(this.onMarkerSelect)
    return (
      <Markers markersProps={this.props.placesOfInterest} onMarkerSelect={this.onMarkerSelect} />
    )
  }
}

// const mapDispatchToProps = { fetchPOIs, fetchPOIDetail };
const mapDispatchToProps = { fetchPOIs };
const mapStateToProps = ({placesOfInterest}) => ({ placesOfInterest });

export default connect(mapStateToProps, mapDispatchToProps)(StatefulMarkers);