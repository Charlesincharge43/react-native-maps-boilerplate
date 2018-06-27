import React from 'react';
import { Animated } from 'react-native';

const withAnimationVerticalSlide = (y1, y2, duration) =>
  WrappedComponent => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          y: new Animated.Value(props.isAtPositionOne ? y1 : y2 )
        }
      }

      shouldComponentUpdate(prevProps){
        return prevProps.isAtPositionOne !== this.props.isAtPositionOne;
      }

      componentDidUpdate(){
        // console.log('component updated')
        if (this.props.isAtPositionOne === false){
          this.slideToSecondPosition();
        } else {
          this.slideToInitialPosition();
        }
      }

      slideToSecondPosition = () => {
        Animated.timing(this.state.y, {
          toValue: y2,
          duration,
        }).start();
      };

      slideToInitialPosition = () => {
        Animated.timing(this.state.y, {
          toValue: y1,
          duration,
        }).start();
      };

      render() {
        return (
          <Animated.View
            style={[{
              transform: [{ translateY: this.state.y }]
            }]}>
            <WrappedComponent {...this.props} />
          </Animated.View>
        )
      }
    }
  }

export default withAnimationVerticalSlide;