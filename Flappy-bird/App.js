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



  // ==================== Start bird falling  ====================
  useEffect(() => {
    if (birdBottom > 0){
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 30)

      return () => {
        clearInterval(gameTimerId)
      }
    }
  }, [birdBottom])


  // ==================== Jump ====================
  const jump = () => {
    if(!isGameOver && (birdBottom < screenHeight)) {
      setBirdBottom(birdBottom => birdBottom + 50)
    }
  }



  //==================== Start first obstacle ====================
  useEffect( () => {
    if(ObstaclesLeft > -60){
      ObstaclesTimerId = setInterval( () => {
        setObstacleLeft(ObstaclesLeft => ObstaclesLeft - 5)
      }, 30)
      return () => {
        clearInterval(ObstaclesTimerId)
      }
    } else {
      setScore(score => score + 1)
      setObstacleLeft(screenWidth)
      setObstacleNegHeight ( -Math.random() *100)
    }
  }, [ObstaclesLeft])


  //==================== Start second obstacle ====================
  useEffect( () => {
    if(ObstaclesLeftTwo > -60){
      ObstaclesTimerIdTwo = setInterval( () => {
        setObstaclesLeftTwo(ObstaclesLeftTwo => ObstaclesLeftTwo - 5)
      }, 30)
      return () => {
        clearInterval(ObstaclesTimerIdTwo)
      }
    } else {
      setScore(score => score + 1)
      setObstaclesLeftTwo(screenWidth)
      setObstacleNegHeightTwo ( -Math.random() *100)
    }
  }, [ObstaclesLeftTwo])


  //==================== Check For Collisions ====================

  useEffect(() => {
    if(
      ((birdBottom < (ObstaclesNegHeight + ObstaclesHeight + 30) ||
      birdBottom > (ObstaclesNegHeight + ObstaclesHeight + gap - 30)) && 
      (ObstaclesLeft > screenWidth/2 - 30 && ObstaclesLeft < screenWidth/2 + 30)
      )
      ||
      ((birdBottom < (ObstaclesNegHeightTwo + ObstaclesNegHeightTwo + 30) ||
      birdBottom > (ObstaclesNegHeightTwo + ObstaclesNegHeightTwo + gap - 30)) && 
      (ObstaclesLeftTwo > screenWidth/2 - 30 && ObstaclesLeftTwo < screenWidth/2 + 30)
      )
    )
    {
      isGameOver()
    }
  })
}


