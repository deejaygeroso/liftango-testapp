import React from 'react';
import styled from 'styled-components';

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
  background-color: pink;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  height: 15px;
  margin-bottom: 50%;
  width: 3px;
`;

const StyledMarkerCircle = styled.div`
  background-color: pink;
  border-radius: 50%;
  height: 20px;
  overflow: visible;
  position: relative;
  width: 20px;

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
  }
`;

const MapMarkerPin = (props) => {
  return (
    <StyledMarkerWrapper>
      <div>
        <StyledMarkerCircle>
          <div>A</div>
        </StyledMarkerCircle>
        <StyledMarkerLeg />
      </div>
    </StyledMarkerWrapper>
  );
};

export default MapMarkerPin;
