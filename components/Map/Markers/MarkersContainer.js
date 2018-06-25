import React, { Component } from 'react';
import { connect } from 'react-redux';

import Markers from './Markers';

class StatefulMarkers extends Component {
  constructor(props) {
    super(props);
    this.onMarkerSelect = this.onMarkerSelect.bind(this);
  }

  onMarkerSelect(e) {
    /* Note: do NOT console log the event by itself ever.  You can console log e.nativeEvent just fine
    but attempting to log just the `e` will cause the map to not work correctly! */
    // console.log(e.nativeEvent)

    /* do something here - fetch POI detail etc. */
    // this.props.fetchPOIDetail(e.nativeEvent.coordinate);
  }

  componentDidUpdate(prevProps){
    console.log('did it update?')
    if (prevProps.placesOfInterest !== this.props.placesOfInterest){
      console.log('force update222?')
      this.forceUpdate();
    }
  }

  render() {
    console.log('did i at least get here?')
    console.log('pois in markerscontainer :')
    console.log(this.props.placesOfInterest)
    return <Markers markersData={this.props.placesOfInterest} onMarkerSelect={this.onMarkerSelect} />
  }
}

const mapStateToProps = ({placesOfInterest}) => ({ placesOfInterest });

export default connect(mapStateToProps)(StatefulMarkers);