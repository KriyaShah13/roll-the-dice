import styled from "styled-components";


export const Button = styled.button `
padding: 18px 10px;
background-color: black;
color: white;
border-radius: 5px;
display: flex;
align-items: center;
gap: 8px;
min-width: 220px;
font-size: 16px;
justify-content: center;
cursor: pointer;
transition: 0.4s background ease-in;
&:hover {
    background-color: green;
    border : 1px solid black;
    color: black;
    transition: 0.4s background ease-in;
}
`;
