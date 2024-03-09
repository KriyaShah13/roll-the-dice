import React from 'react'
import styled from "styled-components";

const Score = ({score}) => {
  return (
    <ScoreContainer>
    <h1> {score}</h1>
    <br></br>
    <p> TOTAL SCORE  </p>
  </ScoreContainer>
  );
};

export default Score;

const ScoreContainer = styled.div `
max-width: 400px;
text-align: center;
h1 {
  font-size: 60px;
  line-height: 100px;
}
p {
  font-size: 34px;
  font-weight: 500px;
}
`;