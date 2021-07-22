import React from 'react';
import styled from 'styled-components';

const handleBackgroundColorByStopType = (stopTypeChar) => {
  if (stopTypeChar === 'A') {
    return 'background-color: palevioletred;';
  }
  return 'background-color: cornflowerblue;';
};

const handleFontColorByStopType = (stopTypeChar) => {
  if (stopTypeChar === 'A') {
    return 'color: palevioletred;';
  }
  return 'color: cornflowerblue;';
};

const StyledMarkerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: center;
  overflow: visible;
  width: 20px;

  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 25px 0;
  }
`;

const StyledMarkerLeg = styled.div`
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  height: 15px;
  margin-bottom: 50%;
  width: 3px;
  ${({ stopTypeChar }) => handleBackgroundColorByStopType(stopTypeChar)};
`;

const StyledMarkerCircle = styled.div`
  border-radius: 50%;
  height: 20px;
  overflow: visible;
  position: relative;
  width: 20px;
  ${({ stopTypeChar }) => handleBackgroundColorByStopType(stopTypeChar)};

  & > div {
    background-color: white;
    border-radius: 50%;
    color: pink;
    font-size: 10px;
    height: 14px;
    left: 50%;
    margin: -7px 0px 0px -7px;
    position: absolute;
    top: 50%;
    width: 14px;
    ${({ stopTypeChar }) => handleFontColorByStopType(stopTypeChar)};
  }
`;

const MapMarkerPin = (props) => {
  const stopTypeChar = props.stopType.charAt(0).toUpperCase();
  return (
    <StyledMarkerWrapper stopTypeChar={stopTypeChar}>
      <div>
        <StyledMarkerCircle stopTypeChar={stopTypeChar}>
          <div>{stopTypeChar}</div>
        </StyledMarkerCircle>
        <StyledMarkerLeg stopTypeChar={stopTypeChar} />
      </div>
    </StyledMarkerWrapper>
  );
};

export default MapMarkerPin;
