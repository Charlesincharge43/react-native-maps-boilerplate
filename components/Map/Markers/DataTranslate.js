import React, { Component } from 'react';
import { View } from 'react-native';

export default class DataTranslate extends Component {
  translate(singleMarkerData){
    const singleMarkerProps = {
      coordinate: singleMarkerData.coordinate,
      identifer: singleMarkerData.id,
      title: singleMarkerData.name,
    }
    return singleMarkerProps;
  }
  render(){
    return <View>
      {this.props.render(this.translate(this.props.singleMarkerData))}
    </View>
  }
}
