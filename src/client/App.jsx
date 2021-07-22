import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { GoogleMap, OverlayView, useLoadScript } from '@react-google-maps/api';
import './app.css';
import MapMarkerPin from './components/MapMarkerPin';
import TripButton from './components/TripButton';

const DEFAULT_CENTER = {
  lat: -32.9269165,
  lng: 151.7607144,
};

const App = () => {
  const [trips, setTrips] = useState([]);
  const [mapInstance, setMapInstance] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
  });

  const onMapLoad = (map) => {
    setMapInstance(map);
  };

  useEffect(() => {
    fetch('/api/getTrips')
      .then((res) => res.json())
      .then((res) => setTrips(res.trips));
  }, []);

  const getDatesWithExistingTrips = (listOfTrips) => {
    const listOfTripsInDateString = listOfTrips.map((trip) => new Date(trip.startTime).toDateString());
    return [...new Set(listOfTripsInDateString)];
  };

  const datesWithTrips = getDatesWithExistingTrips(trips);

  console.log('datesWithTrips', datesWithTrips);

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          center={DEFAULT_CENTER}
          onLoad={onMapLoad}
          mapContainerStyle={{
            height: '400px',
            margin: '0 auto',
            width: '80%',
          }}
          zoom={16}
        >
          <OverlayView
            key={`example_marker_overlay`}
            position={{
              lat: DEFAULT_CENTER.lat,
              lng: DEFAULT_CENTER.lng,
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <MapMarkerPin type={stop.type} />
          </OverlayView>
        </GoogleMap>
      )}
      {datesWithTrips.map((tripDate) => (
        <TripButton tripDate={tripDate} selectDate={() => {}} />
      ))}
    </div>
  );
};

export default App;
