import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import styles from './styles';
import Hamburger from './Hamburger';
import CenterBtn from './CenterBtn';
import withGeolocation from '../shared/hoc/withGeolocation';
import MarkersContainer from './Markers/MarkersContainer';

import { fetchPOIs } from '../../redux/placesOfInterest';

/* global navigator */
/* the global object `navigator `is react-native's built-in geolocation API */

class StatefulMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudeDelta: 0.0025,
      longitudeDelta: 0.0025,
      selectedLatitude: 0,
      selectedLongitude: 0,
      isMapReady: false,
      trackCurrentPosition: true,
    };

    this.onRegionChange = this.onRegionChange.bind(this);
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    this.centerMapToCurrentPosition = this.centerMapToCurrentPosition.bind(this);
    this.onMapReady = this.onMapReady.bind(this);
  }

  onMapReady() {
    this.setState({ isMapReady: true });
    this.props.updateCurrentPosition()
      .then(() => {
        console.log('did props update yet? ')
        console.log(this.props.geolocation)

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
    /* Hacky solution because react native maps would always call onRegionChange a couples times
    in the beginning */
    if (this.state.isMapReady) {
      this.setState({
        trackCurrentPosition: false,
      })
    }
  }

  onRegionChangeComplete({ latitude, longitude, latitudeDelta, longitudeDelta }) {
    console.log('setting custom map window')
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

  render() {
    const { openDrawer } = this.props.navigation;

    return (
      <View style={styles.mapContainer}>
        <Hamburger style={styles.topLeft} onPress={() => {
          openDrawer();
        }} />

        {this.state.trackCurrentPosition ?
          <MapView
            style={styles.map}
            region={this.getRegion()}
            showsUserLocation={true}
            // onPress={(evt) => {console.log('testing: '); console.log(evt)}}
            onRegionChange={this.onRegionChange}
            onMapReady={this.onMapReady} />
          :
          <MapView
            style={styles.map}
            initialRegion={this.getRegion()}
            showsUserLocation={true}
            // onPress={(evt) => {console.log('testing: '); console.log(evt)}}
            onRegionChangeComplete={this.onRegionChangeComplete} />}

        <MarkersContainer />

        <CenterBtn style={styles.bottomRight} onPress={() => {
          this.centerMapToCurrentPosition();
        }} />

      </View>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = { fetchPOIs };

export default connect(mapStateToProps, mapDispatchToProps)(withGeolocation(StatefulMap));