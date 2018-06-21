import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import DataTranslate from './DataTranslate';

const Markers = ({ markersData, onMarkerSelect }) => {
  return <View>
    {
      markersData.map(singleMarkerData =>
        <DataTranslate
          key={singleMarkerData.id}
          singleMarkerData={singleMarkerData}
          render={(singleMarkerProps) => {
            return <MapView.Marker
              coordinate={singleMarkerProps.coordinate}
              identifier={singleMarkerProps.identifier}
              onSelect={onMarkerSelect}
              image={singleMarkerProps.img}
              // pinColor='black'
              title={singleMarkerProps.title}
            />
          }}
          />)
    }
  </View>

}

export default Markers;