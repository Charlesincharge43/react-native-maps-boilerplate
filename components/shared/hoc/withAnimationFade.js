import React from 'react';
import { Animated } from 'react-native';

const withAnimationFade = (duration) =>{
  return WrappedComponent => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          opacity: new Animated.Value(props.isHidden ? 0 : 1 )
        }
      }

      shouldComponentUpdate(prevProps){
        return prevProps.isHidden !== this.props.isHidden;
      }

      componentDidUpdate(){
        // console.log('component updated')
        if (this.props.isHidden === false){
          this.fadeIn();
        } else {
          this.fadeOut();
        }
      }

      fadeIn = () => {
        // console.log('fade in')
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration,
        }).start();
      };

      fadeOut = () => {
        // console.log('fade out')
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration,
        }).start();
      };

      render() {
        return (
          <Animated.View
            style={{
              opacity: this.state.opacity
            }}>
            <WrappedComponent {...this.props} />
          </Animated.View>
        )
      }
    }
  }
}
export default withAnimationFade;