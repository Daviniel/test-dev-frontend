import styled from "styled-components";

export const Container = styled.div`
    height: 200px;
    background-color: #141414;

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;

    .header-form {
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
    
        outline: none;
        box-sizing: border-box;
    
        padding: 15px;
        font-size: 20px;

        background: rgba(81, 72, 105, 0.75);
        backdrop-filter: blur(14px);
        border-radius: 10px;
    }
`;