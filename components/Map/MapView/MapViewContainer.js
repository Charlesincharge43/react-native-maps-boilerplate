import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';

import styles from './styles';
import { setSelectedPOI } from '../../../redux/placesOfInterest';


/*
TODO: This is a very hacky solution as a workaround for some current react native maps limitations.
For details please scroll to the bottom.  The conditional rendering of 2 different MapView components
is an antipattern, and should be refactored away (upon react native maps enhancement / bug fix)

TODO: A lot of map related state is split arbitrarily between this MapViewContainer and the MapContainer.
These two containers and the withGeolocation hoc all are badly in in need of refactoring.
*/

class MapViewContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      renderUserInteractionRestrictedMap : false,
      selectedIdx : null,
     }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.placesOfInterest.length === 0) {
      return {
        selectedIdx : null,
      }
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.isTrackingAndPositionChanged(prevProps)) {
      this.adjustMapToGeoloc();
    }
  }

  isTrackingAndPositionChanged(prevProps){
    return prevProps.trackCurrentPosition && (prevProps.region !== this.props.region);
  }

  adjustMapToGeoloc(){
    this.setState({
      renderUserInteractionRestrictedMap: true
    })
    setTimeout(() => {
      this.setState({
        renderUserInteractionRestrictedMap: false
      })
    }, 0)
  }

  setSelectedIdx(idx) {
    this.setState({
      selectedIdx: idx
    })
    /* do something here - fetch POI detail etc. */
    // this.props.fetchPOIDetail(e.nativeEvent.coordinate);
  }

  render() {
    return (

    <View style={styles.mapContainer}>
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
          onPress={(e) => {
            /* Note: do NOT console log the event by itself ever.  You can console log e.nativeEvent just fine
              but attempting to log just the `e` will cause the map to not work correctly! */
            // console.log(e.nativeEvent);// uncomment to easily grab coordinate info by pressing anywhere on the map
            this.setSelectedIdx(null);
          }}
          onRegionChange={this.props.onRegionChange}
          onRegionChangeComplete={this.props.onRegionChangeComplete}
          onMapReady={this.props.onMapReady}>

            {
              /* Note.. MapView Markers MUST be DIRECT children of MapView.
              Trust me you will suffer mightily if you do not follow this rule!! */
              this.props.placesOfInterest.map((singleMarkerProps, idx) =>
                <MapView.Marker
                      key= {idx}
                      stopPropagation={true}
                      coordinate={singleMarkerProps.coordinate}
                      identifier={singleMarkerProps.identifier}
                      onSelect={() => this.setSelectedIdx(idx) }
                      pinColor={ idx === this.state.selectedIdx ? 'yellow' : 'black'}
                      title={singleMarkerProps.title}
                    />)
            }
        </MapView>}
    </View>
    
    )
  }

}

const mapStateToProps = ({placesOfInterest}) => ({ placesOfInterest });
const mapDispatchToProps = { setSelectedPOI };

export default connect(mapStateToProps, mapDispatchToProps)(MapViewContainer);


/*

The gist of it is that it is difficult to implement react native maps in a way that allows the
same MapView to programmatically update its location from some geolocation source while also giving the user
the option to "decouple" it from that source and manually move it around.

There are currently only 2 ways of automatically updating a MapView- `animateToxxxx` methods
(which you would access via `refs`), and utilizing `region` props

`animateToxxxx` methods are problematic because when invoked they trigger the `onRegionChange`
hook, which is currently being used to track user interaction related map scrolling (more specifically
that hook is used to "decouple" the map from the geolocation source by setting the `trackCurrentPosition`
flag to false).  If an `animateToxxxx` method is used to programmatically update the MapView from
geolocation update, it would just end up "decoupling" it right after a single animation.
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
while giving the user the ability to move it around manually afterward.

This option appears not to cause any performance hits (React does not attempt to completely rerender the
entire map every time one of the conditionals change), but it's clearly not good practice.  This container should
be refactored as soon as it's possible to do so.

*/