import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ latitude, longitude }) => {
  const center = { lat: latitude, lng: longitude };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={center}
        defaultZoom={11}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
