import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import Hamburger from './buttons/Hamburger';
import CenterBtn from './buttons/CenterBtn';
import RedoSearchBtn from './buttons/RedoSearchBtn';

import withGeolocation from '../Map/hoc/withGeolocation';
import MapViewWrapper from './MapViewWrapper';
import MarkersContainer from './Markers/MarkersContainer';

import { fetchPOIs, clearPOIs } from '../../redux/placesOfInterest';

/* TODO: many aspects of this component are not optimal due to some limitations and/or bugs related to either react native maps
or ios simulator.

When the relevant enhancements/fixes have been implemented, the sub optimal code should be refactored.
Scroll to `onRegionChange` method for specific notes.  Also see `MapViewWrapper.js` */

class StatefulMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudeDelta: 0.007,
      longitudeDelta: 0.007,
      selectedLatitude: 0,
      selectedLongitude: 0,
      trackCurrentPosition: true,
    };

    this.onRegionChange = this.onRegionChange.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.centerMapToCurrentPosition = this.centerMapToCurrentPosition.bind(this);
    this.onMapReady = this.onMapReady.bind(this);
  }

  onMapReady() {
    this.props.updateCurrentPosition()
      .then(() => {
        this.props.fetchPOIs(this.getRegion())
      })
  }

  centerMapToCurrentPosition() {
    this.setState({
      trackCurrentPosition: true,
    });
    this.props.updateCurrentPosition();
  }

  onRegionChange() {
    /* setting of `trackCurrentPosition` to false is coupled with the `onRegionChange` hook here, in order to allow
    manual user interaction to disable automatic location updating from the `withGeolocation` props.  This
    is suboptimal as `onRegionChange` also gets triggered when the application does any sort of map scrolling animation.
    
    Unfortunately, react native maps does NOT provide a way to distinguish region change from user vs from the application.
    Consequently, map location updating from the application have to avoid "animations" to not trigger this hook.
    (See MapViewWrapper.js comments)
    (See related github issues thread: https://github.com/react-community/react-native-maps/issues/1620)

    Because there is an automatic animation movement that always triggers after component mounting/onMapReady, but before
    `withGeolocation` has updated props, this `if` conditional is required to avoid `trackCurrentPosition` from being set to
    false prematurely in the beginning before the user has had a chance to interact with the map
    */

    if (this.props.geolocation && this.props.geolocation.initialized) {
      this.setState({
        trackCurrentPosition: false,
      })
    }
  }

  onRegionChangeComplete({ latitude, longitude, latitudeDelta, longitudeDelta }) {
    this.setState({
      latitudeDelta,
      longitudeDelta,
      selectedLatitude: latitude,
      selectedLongitude: longitude,
    })
  }

  getCurrentLatitude() {
    return this.props.geolocation.currentLatitude;
  }

  getCurrentLongitude() {
    return this.props.geolocation.currentLongitude;
  }

  getRegion() {
    return {
      latitude: this.getCurrentLatitude(),
      longitude: this.getCurrentLongitude(),
      latitudeDelta: this.state.latitudeDelta,
      longitudeDelta: this.state.longitudeDelta,
    };
  }

  getSelectedRegion() {
    return {
      latitude: this.state.selectedLatitude,
      longitude: this.state.selectedLongitude,
      latitudeDelta: this.state.latitudeDelta,
      longitudeDelta: this.state.longitudeDelta,
    };
  }

  componentWillUnmount(){
    this.props.clearPOIs();
  }

  render() {
    const { openDrawer } = this.props.navigation;

    return (
      <View style={styles.mapContainer}>
        <Hamburger style={styles.topLeft} onPress={openDrawer} />

        <MapViewWrapper
          trackCurrentPosition={this.state.trackCurrentPosition}
          region={this.getRegion()}
          onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          onMapReady={this.onMapReady}>
          
          <MarkersContainer />

        </MapViewWrapper>

        <CenterBtn style={styles.bottomRight} onPress={this.centerMapToCurrentPosition} />

        <RedoSearchBtn style={styles.bottomCenter}/>

      </View>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = { fetchPOIs, clearPOIs };

export default connect(mapStateToProps, mapDispatchToProps)(withGeolocation(StatefulMap));