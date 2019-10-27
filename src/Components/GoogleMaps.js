import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const HandleApiLoaded = ({ map, maps }) => <div></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.75,
      lng: -84.38
    },
    zoom: 8
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBc61USa9FKYmMvZ0JYsoUTUOIWfPyE-yk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => HandleApiLoaded(map, maps)}
        >
          <HandleApiLoaded
            lat={33.7557}
            lng={-84.3884}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap; 