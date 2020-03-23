import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
    font-size: 16px;
    
    input {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        line-height: 2rem;
        padding: 1rem;
        background: #383838;
        border: 0;
        color: #fff;
    }

    textarea {
        font-size: 1.15rem;
        margin-bottom: 1rem;
        line-height: 2rem;
        padding: 1rem;
        background: #383838;
        border: 0;
        font-family: 'Verdana';
        color: #fff;

        ::-webkit-input-placeholder {
            font-family: 'Verdana';
        }
        ::-moz-placeholder {
            font-family: 'Verdana';
        }
        :-ms-input-placeholder {
            font-family: 'Verdana';
        }
        :-moz-placeholder {
            font-family: 'Verdana';
        }
    }

    button {
        border: 0;
        background: #363636;
        color: #fff;
        font-size: 1.2rem;
        padding: 1rem;
        transition: all 0.3s;
        outline: none;

        &:hover {
            background: #666;
            cursor: pointer;
        }

        &:active {
            background: #888;
        }
    }
`;

export default StyledForm;