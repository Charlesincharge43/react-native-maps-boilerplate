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
          render={(translatedData) => {
            return <MapView.Marker
              coordinate={translatedData.coordinate}
              identifier={translatedData.identifier}
              onSelect={onMarkerSelect}
              pinColor='black'
              title={translatedData.title}
            />
          }}
          />)
    }
  </View>

}

export default Markers;