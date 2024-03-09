import React from 'react'
import styled from 'styled-components';
import Score from './Score';
import Select from './Select';
import RollDice from './RollDice';
import { useState } from 'react';
import { Button } from "../styled/Button";
import Rules from "./Rules";


const GamePlay = () => {
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(2);
  const [score,setScore] = useState ("");
  const [error , setError] = useState("");
  const [showRules , setShowRules] = useState("");
  
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!selectedNumber){
      setError ("You haven't selected any number")
      return;
    } 
    setError ("");
    
    const randomNumber = generateRandomNumber (1,7);

  
    setCurrentDice ((prev) => randomNumber);
    
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  
  }
  const resetScore = () => {
    setScore (0);
  }
  return (
   <MainContainer>
    <div className="top_section">

  
  
    <Score score = {score}/>
    <Select
    error = {error}
     selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}/>
      
      </div>
      <RollDice
      currentDice={currentDice}
      rollDice={rollDice}/>
      <div className="btns">
        <Button
         onClick={resetScore}> Score Reset </Button>
       
        
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
        {showRules && <Rules/>}

      </div>
      </MainContainer>

   
      
      
  )
}

export default GamePlay;
const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
