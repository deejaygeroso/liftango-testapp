import React from 'react';
import styled from 'styled-components';

const StyledTripButton = styled.button`
  background: palevioletred;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  height: 30px;
  margin: 5px 0 5px 5px;
  width: 120px;
`;

const TripButtons = (props) => {
  const { selectDate, trips } = props;

  const getDatesWithExistingTrips = (listOfTrips) => {
    const listOfTripsInDateString = listOfTrips.map((trip) => new Date(trip.startTime).toDateString());
    return [...new Set(listOfTripsInDateString)];
  };

  const datesWithTrips = getDatesWithExistingTrips(trips);

  return datesWithTrips.map((tripDate) => (
    <StyledTripButton key={`tripButton_${tripDate}`} onClick={() => selectDate(tripDate)}>
      {tripDate}
    </StyledTripButton>
  ));
};

export default TripButtons;
