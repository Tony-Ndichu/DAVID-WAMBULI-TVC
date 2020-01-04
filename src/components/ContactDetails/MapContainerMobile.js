import React, { PureComponent } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '90%',
  height: '500px',
  display: 'block',
  margin: '0 auto'
};

export class MapContainerMobile extends PureComponent {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: -1.517738, lng: 37.264845 }}
      >
        <Marker position={{ lat: -1.517738, lng: 37.264845 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCINZPSEF612A-SyzrcVgCa57LU4nz3vHY'
})(MapContainerMobile);
