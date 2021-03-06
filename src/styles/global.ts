import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff; 
        --green: #33cc95;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html{
        @media (max-width: 1000px){
            font-size: 93.75%;
        } 
        @media (max-width: 720px){
            font-size: 87.5%;
        } 
    }

    body{
        background: var(---background);
    }


    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
    }

    button{
     cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        border-radius: 0.24rem;
        position: relative;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`

