import React from 'react';
import { TouchableOpacity } from 'react-native';

const btnFactory = (ButtonViewComponent) =>
  class extends React.Component {
    render(){
      const additionalStyle = this.props.style || {};
      return (
        <TouchableOpacity style={additionalStyle} onPress={() => {
          if (this.props.onPress){
            this.props.onPress();
          }
        }}>
          <ButtonViewComponent />
        </TouchableOpacity>
      )
    }
  }

  export default btnFactory;