import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Bird from './components/bird';
import Obstacles from './components/obstacles';

export default function App() {
  // Forward move on x axis
  const screenWidth = Dimensions.get("screen").width; 
  // Falling on y axis
  const screenHeight = Dimensions.get("screen").height;
  // To fly
  const birdLeft = screenHeight / 2;
  // Beginning on game
  const [birdBottom, setBirdBottom] = useState(screenHeight/2);
  const [ObstaclesLeft, setObstacleLeft] = useState(screenWidth);
  //Second obstacles
  const [ObstaclesLeftTwo, setObstaclesLeftTwo] = useState (screenWidth); //maybe bug
  //For crush 
  const [ObstaclesNegHeight, setObstacleNegHeight] = useState(0);
  const [ObstaclesNegHeightTwo, setObstacleNegHeightTwo] = useState(0);
  //Game over
  const [isGameOver, setIsGameOver] = useState(false); // Maybe bug
  //Score
  const [score, setScore] = useState(0);
  //Gravity
  const gravity = 3;

  //Component values
  let ObstaclesWidth = 60;
  let ObstaclesHeight = 300;
  let gap = 100;
  //Other variables which we are going to use later
  let gameTimerId;
  let ObstaclesTimerId;
  let ObstaclesTimerIdTwo;


}

