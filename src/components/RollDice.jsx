import React from 'react'
import styled from "styled-components";


const RollDice = ({rollDice,currentDice}) => {
   return (
   <DiceContainer>
    <div className="dice" 
    onClick= {rollDice}>
        <img src={`public/Dice/dice_${currentDice}.png`} alt="dice1" />
        <p>Click on the dice to roll</p>

    </div>
   </DiceContainer>
  );
  
};

export default RollDice;
const DiceContainer = styled.div `
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

.dice {
  cursor: pointer;
}

p {
  font-size: 23px;
  margin-top:24px;
}
`;