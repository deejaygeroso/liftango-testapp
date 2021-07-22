import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledTripButton = styled.button`
  background: pink;
  border: none;
  border-radius: 3px;
  height: 30px;
  width: 120px;
`;

const TripButtons = (props) => {
  const { selectDate, tripDate } = props;

  return <StyledTripButton onClick={() => selectDate(tripDate)}>{tripDate}</StyledTripButton>;
};

export default TripButtons;
