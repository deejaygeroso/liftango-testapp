import React from 'react';
import styled from 'styled-components';

const handleSelectedButton = (isSelected) => {
  if (isSelected) {
    return 'background-color: #b94f72;';
  }
  return 'background-color: palevioletred;';
};

const StyledTripButton = styled.button`
  background-color: palevioletred;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  height: 30px;
  margin: 5px 0 5px 5px;
  width: 120px;

  &:hover {
    background-color: #b94f72;
  }

  ${({ isSelected }) => handleSelectedButton(isSelected)};
`;

const TripButtons = (props) => {
  const { selectDate, selectedDate, trips } = props;

  const getDatesWithExistingTrips = (listOfTrips) => {
    const listOfTripsInDateString = listOfTrips.map((trip) => new Date(trip.startTime).toDateString());
    return [...new Set(listOfTripsInDateString)];
  };

  const datesWithTrips = getDatesWithExistingTrips(trips);

  return datesWithTrips.map((tripDate) => (
    <StyledTripButton key={`tripButton_${tripDate}`} onClick={() => selectDate(tripDate)} isSelected={tripDate === selectedDate}>
      {tripDate}
    </StyledTripButton>
  ));
};

export default TripButtons;
