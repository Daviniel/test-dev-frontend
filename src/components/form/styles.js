import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  padding: 20px;

  background-color: #141414;

  .form__btn {
    padding: 13px;
    border: none;
    border-radius: 8px;
    outline: none;
    text-transform: uppercase;
    font-weight: bolder;
    background: #00ff88;
    cursor: pointer;
    box-shadow: 0 10px 40px -12px #00ff8052;
    opacity: 0.7;
  }

  .form__btn:hover {
    opacity: 1;
    box-shadow: 0 10px 30px -12px #fff;
    transition: ease-in-out 0.1s;
  }

  input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
  }

  select {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 15px;
    background: #514869;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0 10px 40px #00000056;
    outline: none;
    box-sizing: border-box;
  }

  input::placeholder {
    color: #f0ffffde;
  }
`;