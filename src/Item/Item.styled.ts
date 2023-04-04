import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 20px;
  height: 100%;
  background-color: #ffffff38;

  button {
    border-radius: 0 0 20px 20px;
    margin-top: 10px;
  }

  button:hover {
    background-color: #fff;
    color: #000;
  }

  img {
    max-height: 250px;
    width: 30%;
    border-radius: 20px 20px 0 0;
    margin: 20px;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;

  }

  .itemDiv {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 50px;
  }

  .titleDescDiv {
    border: 1px solid black;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
  }
`;
