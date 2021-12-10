import styled from "styled-components";

export const Div = styled.div`
  width: 80%;
  max-width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 15px;
  box-shadow: 10px 9px 14px -5px rgba(0,0,0,0.75);
  border: solid #dedede;
  border-radius: 5px;
`;

export const Button = styled.button`
    border: none;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    background-color: #72C0F1;
`