import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

const Markers = ({ markersData, onMarkerSelect }) => {
  return <View>
    {
      markersData.map((singleMarkerProps, idx) =>
        <MapView.Marker
              key= {idx}
              coordinate={singleMarkerProps.coordinate}
              identifier={singleMarkerProps.identifier}
              onSelect={onMarkerSelect}
              pinColor='black'
              title={singleMarkerProps.title}
            />)
    }
  </View>

}

export default Markers;