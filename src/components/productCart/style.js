import styled from "styled-components";

export const Div = styled.div`
  width: 70%;
  max-width: 550px;
  height: 180px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin: 15px;
  box-shadow: 10px 9px 14px -5px rgba(0, 0, 0, 0.75);
  border: solid #dedede 1px;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  background-color: #fa2f08;
`;

export const Name = styled.h4`
  width: 100%;
`;
