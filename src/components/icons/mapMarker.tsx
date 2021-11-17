import React, { FC } from 'react';
import styled from 'styled/styled';
import theme from 'styled/theme';

export enum MapMarkerColor {
  primary = 'primary',
  secondary = 'secondary',
}

const markerColors = {
  [MapMarkerColor.primary]: theme.colors.blue,
  [MapMarkerColor.secondary]: theme.colors['dark-grey'],
};

type MarkerColorProps = {
  markerColor: keyof typeof MapMarkerColor;
};

const StyledMapMarker = styled.svg<MarkerColorProps>`
  fill: ${({ markerColor }) => markerColors[markerColor]};
  stroke: ${({ markerColor }) => markerColors[markerColor]};
`;

const MapMarker: FC<MarkerColorProps> = ({
  markerColor = MapMarkerColor.primary,
}) => (
  <StyledMapMarker
    width="16"
    height="26"
    viewBox="0 0 16 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    markerColor={markerColor}>
    <path d="M8 11V25" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="8" r="8" />
  </StyledMapMarker>
);

export default MapMarker;
