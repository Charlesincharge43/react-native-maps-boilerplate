import React from 'react';

const MapMarkers = ({ markersProps }) => {
  return
  <div>
    {
      markersProps.map(props =>
        <MapView.Marker
          coordinate={props.coordinate}
          identifier={props.identifier}
          onSelect={props.onSelect}
          image={props.img}
          // pinColor='black'
          title={props.title}
        />)
    }
  </div>
}

export default MapMarkers;