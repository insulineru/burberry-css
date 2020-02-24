/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [firstColor, setFirstColor]  = useState('rgba(172, 72, 75, 0.5)');
  const [secondColor, setSecondColor] = useState('rgba(236, 218, 182, 0)');
  const [thirdColor, setThirdColor] = useState('rgba(54, 50, 51, 0.5)');
  const [fourthColor, setFourthColor] = useState('rgba(255, 255, 255, 0.5)');

  return (
    <Background firstColor={firstColor} />
  );
}

const Background = styled.div`
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #ecdab6;
    background-image: -moz-repeating-linear-gradient(
      45deg,
      transparent 5px,
      ${props => props.firstColor || 'rgba(172, 72, 75, 0.5)'} 5px,
      ${props => props.firstColor || 'rgba(172, 72, 75, 0.5)'} 11px,
      ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 12px,
      ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 57px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 58px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 70px,
      ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 71px,
      ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 83px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 84px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 96px,
      ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 97px,
      ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 109px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 110px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 122px,
      ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 123px,
      ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 166px
    ),
    -moz-repeating-linear-gradient(135deg, transparent 5px,
      ${props => props.firstColor || 'rgba(172, 72, 75, 0.5)'} 5px,
      ${props => props.firstColor || 'rgba(172, 72, 75, 0.5)'} 11px,
      ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 12px,
      ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 57px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 58px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 70px,
      ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 71px,
      ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 83px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 84px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 96px,
      ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 97px,
      ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 109px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 110px,
      ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 122px,
      ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 123px,
      ${props => props.secondColor || 'rgba(236, 218, 182, 0)'}166px);

      background-image: -webkit-repeating-linear-gradient(
        45deg,
        transparent 5px,
        ${props => props.firstColor || 'rgba(172, 72, 75, 0.5)'} 5px,
        ${props => props.firstColor || 'rgba(172, 72, 75, 0.5)'} 11px,
        ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 12px,
        ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 57px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 58px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 70px,
        ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 71px,
        ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 83px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 84px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 96px,
        ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 97px,
        ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 109px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 110px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 122px,
        ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 123px,
        ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 166px
      ),
      -webkit-repeating-linear-gradient(135deg,
        transparent 5px,
        ${props => props.firstColor || 'rgba(172, 72, 75, 0.5)'} 5px,
        ${props => props.firstColor || 'rgba(172, 72, 75, 0.5)'} 11px,
        ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 12px,
        ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 57px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 58px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 70px,
        ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 71px,
        ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 83px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 84px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 96px,
        ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 97px,
        ${props => props.fourthColor || 'rgba(255, 255, 255, 0.5)'} 109px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 110px,
        ${props => props.thirdColor || 'rgba(54, 50, 51, 0.5)'} 122px,
        ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 123px,
        ${props => props.secondColor || 'rgba(236, 218, 182, 0)'} 166px);
  `;

export default App;
