import React from 'react';
import {View } from 'react-native';
import MapView from 'react-native-maps';

import styles from './styles';

/*
TODO: This is a very hacky solution as a workaround for some current react native maps limitations.
For details please scroll to the bottom.  A lot of map related state and functions are still being kept
in `MapContainer` rather than here because the expectation is that this entire wrapper will be
competely removed and replaced with a plain MapView (upon react native maps enhancement / bug fix)
*/

class MapViewWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = { renderUserInteractionRestrictedMap : false }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trackCurrentPosition && (prevProps.region !== this.props.region)) {
      this.setState({
        renderUserInteractionRestrictedMap: true
      })
      setTimeout(() => {
        this.setState({
          renderUserInteractionRestrictedMap: false
        })
      }, 0)
    }

  }

  render() {
    return (<View style={styles.mapContainer}>
      {this.props.trackCurrentPosition && this.state.renderUserInteractionRestrictedMap ? 
        <MapView
          style={styles.map}
          region={this.props.region}
          showsUserLocation={true}
          onRegionChange={this.props.onRegionChange}
          onMapReady={this.props.onMapReady}/>
        :
        <MapView
          style={styles.map}
          initialRegion={this.props.region}
          showsUserLocation={true}
          onRegionChange={this.props.onRegionChange}
          onRegionChangeComplete={this.props.onRegionChangeComplete}
          onMapReady={this.props.onMapReady}>
          {this.props.children}
        </MapView>}
    </View>)
  }

}

export default MapViewWrapper;


/*

The gist of it is that it is difficult to implement react native maps in a way that allows the
same MapView to programmatically update its location from some geolocation source and give the user
 the option to "decouple" it from that source and manually move it around.

There are currently only 2 ways of automatically updating a MapView- `animateToxxxx` methods
(which you would access via `refs`), and utilizing `region` props

`animateToxxxx` methods are problematic because when invoked they trigger the `onRegionChange`
hook, which is currently being used to track user interaction related map scrolling (more specifically
that hook is used to "decouple" the map from the geolocation source by setting the `trackCurrentPosition`
flag to false).  If an `animateToxxxx` method is used to programmatically update the MapView from
geolocation update, it would just end up "decoupling" it after a single animation.
(see MapContainer.js for more notes).

Exclusively utilizing the `region` props is also problematic because a MapView that uses that property "locks"
the map to that property's values, permanently coupling the MapView to the geolocation source and preventing
 the user from manually moving the map around.

Consequently, the only work around is to render one of 2 different MapViews conditionally:
one that uses the `region` props, and one that uses the `initialRegion` props (`initialRegion`
allows a MapView to render to a region while giving the user the ability to move around afterward)

The MapView that uses the `region` props will only be rendered a short time (provided the `trackCurrentPosition`
 flag is set to true), and replaced by a MapView that uses the `initialRegion`
props within 1 ms of geolocation update.  This will allow the coordinates to update the map
while giving the user the ability to move it around manual afterward.

This option appears not to cause any performance hits (React does not attempt to completely rerender the
entire map every time one of the conditionals change), but it's clearly not good practice.  This wrapper should
be removed as soon as it's possible to do so.
*/