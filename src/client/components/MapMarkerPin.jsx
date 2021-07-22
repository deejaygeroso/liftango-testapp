import React from 'react';
import styled from 'styled-components';

const StyledMarker = styled.div`
  height: 20px; 
  width: 20px;
  background-color: red;
  display: flex;
  border-radius: 20px;
`;

const MapMarkerPin = (props) => {
  return (<StyledMarker />);
};

export default MapMarkerPin;
