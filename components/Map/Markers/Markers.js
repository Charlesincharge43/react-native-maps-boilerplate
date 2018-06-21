import React from 'react';
import { View } from 'react-native';

const Markers = ({ markersProps, onMarkerSelect }) => {
  return <View>
    {
      markersProps.map(singleMarkerProps =>
        <MapView.Marker
          coordinate={singleMarkerProps.coordinate}
          identifier={singleMarkerProps.identifier}
          onSelect={onMarkerSelect}
          image={singleMarkerProps.img}
          // pinColor='black'
          title={singleMarkerProps.title}
        />)
    }
  </View>

}

export default Markers;