import React from 'react';

/* global navigator */
/* the global object `navigator `is react-native's built-in geolocation API */

/* Higher order component to enhance wrapped components with geolocation data */
const withGeolocation = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        initialized : false,
        currentLatitude: 0,
        currentLongitude: 0,
        error: null,
      };
      this.updateCurrentPosition = this.updateCurrentPosition.bind(this);
    }

    componentDidMount() {
      this.watchPositionId = navigator.geolocation.watchPosition(
        (position) => {
          this.setState({
            initialized: true,
            currentLatitude: position.coords.latitude,
            currentLongitude: position.coords.longitude,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
      );
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchPositionId);
    }

    updateCurrentPosition() {
      /* For directly fetching and updating current location in situations where one cannot
      wait for `watchPosition` to automatically update */

      return promisifiedGetCurrentPosition({ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })
        .then(position => {
          return new Promise((resolve) => {
            this.setState({
              currentLatitude: position.coords.latitude,
              currentLongitude: position.coords.longitude,
            }, resolve)
          })
        })
        .catch(error => this.setState({ error: error.message }));
    }

    render() {
      return <WrappedComponent updateCurrentPosition={this.updateCurrentPosition} geolocation={this.state} {...this.props} />
    }
  };
}

export default withGeolocation;

/* -----------  GEOLOCATION UTILITY FUNCTIONS ----------- */

function promisifiedGetCurrentPosition(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      options,
    );
  })
}