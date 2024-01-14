import styled from 'styled-components';

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: #141414;

    justify-content: center;
    align-items: center;

    .login-page {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form-login {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px 35px;
        background: #141414;
        border-radius: 20px;
        box-shadow: 0 10px 40px #00000056;
    }

    .form-login > h1 {
        color: #00ff88;
        font-size: 50px;
    }

    .form-login-input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
    }

    .form-login-input > input {
        width: 50%;
        border: none;
        border-radius: 10px;
        padding: 15px;
        color: #141414;
        font-size: 12pt;
        box-shadow: 0 10px 40px #141414;
        outline: none;
        box-sizing: border-box;
    }

    .button-form-login {
        padding: 2px 0;
        margin: 10px;
        border: none;
        border-radius: 8px;
        outline: none;
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 18px;
        letter-spacing: 3px;
        color: #2b134b;
        background: #00ff88;
        box-shadow: 0 10px 40px -12px #00ff8052;
        opacity: 0.5;
    }

`;