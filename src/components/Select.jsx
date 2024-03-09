import React from 'react'
import styled from "styled-components";



  const Select = ({error,selectedNumber,setSelectedNumber}) => {
  const arrNumber = [1,2,3,4,5,6];
 
  console.log (selectedNumber);
  return (
    <SelectContainer>
      <p> {error}</p>
  <div className="flex">



    {arrNumber.map((value,i) => (
     <Box 
     isSelected = {
      value === selectedNumber
     }
     key = {i} onClick = {() => setSelectedNumber(value)} > 
     {value}
     </Box>
    ))}
     
   
    
  </div>
  <p>SELECT NUMBER</p>
  
  </SelectContainer>
    

  
  
  
 
  
  );
};


export default Select;
const SelectContainer = styled.div`
 .flex {
  display : flex;
  gap: 24px;
 }
 p {
  font-size: 24px;
  font-weight: 700px;

}
error {
  color: red;
}
`;



  const Box = styled.div`
  height: 52px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;