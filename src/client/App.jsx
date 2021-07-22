import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { GoogleMap, OverlayView, useLoadScript } from '@react-google-maps/api';
import './app.css';
import MapMarkerPin from './components/MapMarkerPin';
import TripButtons from './components/TripButtons';

const DEFAULT_CENTER = {
  lat: -32.9269165,
  lng: 151.7607144,
};

const App = () => {
  const [trips, setTrips] = useState([]);
  const [selectedTripCount, setTripCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
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

  const selectDateThenReAdjustMap = (selectedDateFromTripButton) => {
    const matchedTrips = trips.filter((trip) => new Date(trip.startTime).toDateString() === selectedDateFromTripButton);
    setTripCount(matchedTrips.length);
    setSelectedDate(selectedDateFromTripButton);

    const bounds = new window.google.maps.LatLngBounds();
    matchedTrips.map((trip) => {
      trip.stops.map((stop) => {
        bounds.extend(new window.google.maps.LatLng(stop.address.latitude, stop.address.longitude));
      });
    });

    mapInstance.fitBounds(bounds);
  };

  const hasUserSelectedADateTrip = trips.length !== 0 && selectedTripCount;

  return (
    <div>
      {selectedDate && <h1>{`Date: ${selectedDate}, Count: ${selectedTripCount}`}</h1>}
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
          {hasUserSelectedADateTrip &&
            trips.map((trip) => (
              <>
                {new Date(trip.startTime).toDateString() === selectedDate &&
                  trip.stops.map((stop) => (
                    <OverlayView
                      key={`maker_overlay_${Math.random()}`}
                      position={{
                        lat: stop.address.latitude,
                        lng: stop.address.longitude,
                      }}
                      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                    >
                      <MapMarkerPin stopType={stop.type} />
                    </OverlayView>
                  ))}
              </>
            ))}
        </GoogleMap>
      )}
      <TripButtons trips={trips} selectDate={selectDateThenReAdjustMap} />
    </div>
  );
};

export default App;
