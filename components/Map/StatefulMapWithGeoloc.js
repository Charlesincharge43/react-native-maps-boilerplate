import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';
import Hamburger from './Hamburger';
import CenterBtn from './CenterBtn';
import withGeolocation from '../shared/hoc/withGeolocation';

/* global navigator */
/* the global object `navigator `is react-native's built-in geolocation API */

class StatefulMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitudeDelta: 0.0025,
      longitudeDelta: 0.0025,
      userLatitude: 0,
      userLongitude: 0,
      trackCurrentPosition: true,
      detachedLatitude: 0,
      detachedLongitude: 0,
      isMapReady: false,
    };

    this.onRegionChange=this.onRegionChange.bind(this);
    this.onRegionChangeComplete=this.onRegionChangeComplete.bind(this);
    this.centerMapToCurrentPosition=this.centerMapToCurrentPosition.bind(this);
    this.onMapReady=this.onMapReady.bind(this);
  }

  onMapReady(){
    this.setState({ isMapReady: true });
  }

  centerMapToCurrentPosition(){
    this.setState({
      trackCurrentPosition: true,
    });
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

  onRegionChangeComplete({latitude, longitude, latitudeDelta, longitudeDelta}) {
    console.log('setting custom map window')
    this.setState({
      latitudeDelta,
      longitudeDelta,
      detachedLatitude: latitude,
      detachedLongitude: longitude,
    })
  }

  componentWillReceiveProps(nextProps){
    const {userLatitude, userLongitude} = nextProps.geolocation;
      this.setState({
        userLatitude,
        userLongitude,
      })
  }

  render() {
    const { openDrawer } = this.props.navigation;
    const { userLatitude, userLongitude, latitudeDelta, longitudeDelta } = this.state;
    const region = {
      latitude: userLatitude,
      longitude: userLongitude,
      latitudeDelta,
      longitudeDelta,
    };

    return (
      <View style={styles.mapContainer}>
        <Hamburger style={styles.topLeft} onPress={() => {
          openDrawer();
        }}/>

        { this.state.trackCurrentPosition ?
          <MapView
          style={styles.map}
          region={region}
          showsUserLocation={true}
          onRegionChange={this.onRegionChange}
          onMapReady={this.onMapReady} />
           :
          <MapView
          style={styles.map}
          initialRegion={region}
          showsUserLocation={true}
          onRegionChangeComplete={this.onRegionChangeComplete} /> }

        <CenterBtn style={styles.bottomRight} onPress={() => {
          this.centerMapToCurrentPosition();
        }}/>

      </View>
    )
  }
}

export default withGeolocation(StatefulMap);