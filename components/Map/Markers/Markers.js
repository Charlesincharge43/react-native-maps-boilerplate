import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

// const Markers = ({ markersData, onMarkerSelect }) => {
//   console.log('inside markers: ')
//   console.log(markersData)
//   return <View>
//     {
//       markersData.map((singleMarkerProps, idx) =>
//         <MapView.Marker
//               key= {idx}
//               coordinate={singleMarkerProps.coordinate}
//               identifier={singleMarkerProps.identifier}
//               onSelect={onMarkerSelect}
//               pinColor='black'
//               title={singleMarkerProps.title}
//             />)
//     }
//   </View>

// }

// export default Markers;

export default class Markers extends React.Component {
  componentDidUpdate(prevProps){
    console.log('did it update?')
    if (prevProps.markersData !== this.props.markersData){

      this.forceUpdate();
    }
  }
  render() {
    return <View>
        {
          this.props.markersData.map((singleMarkerProps, idx) =>
            <MapView.Marker
                  key= {idx}
                  coordinate={singleMarkerProps.coordinate}
                  identifier={singleMarkerProps.identifier}
                  onSelect={this.props.onMarkerSelect}
                  pinColor='black'
                  title={singleMarkerProps.title}
                />)
        }
      </View>
  }
}