import React, { Component } from 'react';

import Mapscreen from './Mapscreen';

/* Higher order component to enhance wrapped components with geolocation data */
const withGeolocation = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userLatitude: null,
        userLongitude: null,
        error: null,
      };
    }

    componentDidMount() {
      this.watchPositionId = navigator.geolocation.watchPosition(
        (position) => {
          this.setState({
            userLatitude: position.coords.latitude,
            userLongitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
      );
    }

    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchPositionId);
    }

    render() {
      return <WrappedComponent geolocation={this.state} {...this.props} />
    }
  };
}

export default withGeolocation(Mapscreen);