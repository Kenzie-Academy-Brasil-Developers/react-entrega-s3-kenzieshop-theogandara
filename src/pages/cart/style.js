import styled from "styled-components";

export const Vitrine = styled.div`
  width: 80%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const Div = styled.div`
  width: 80%;
  max-width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 15px 30px;
  box-shadow: 10px 9px 14px -5px rgba(0, 0, 0, 0.75);
  border: solid #dedede 1px;
  border-radius: 5px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
`;

export const Button = styled.button`
    height: 40px;
    width: 200px;
    border: none;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    background-color: #72C0F1;
    margin :10px;
`
