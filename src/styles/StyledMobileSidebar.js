import styled from 'styled-components';

const StyledMobileSidebar = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #484848;
    color: #eee;
    z-index: 2;
    transition: all 0.3s;

    a {
        text-decoration: none;
        color: #eee;
    }

    ul {
        display: ${(props) => props.sidebarToggled ? "block" : "none"};
        padding: 0;
        margin: 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        border-bottom: 1px solid #343434;
        background-color: #363636;
        padding: 0 20px;

        h1 {
            display: inline-block;
            margin: 10px 0;
        }

        button {
            background: none;
            border: 2 px solid #eee;
            border-radius: 10px;
            color: #eee;
            cursor: pointer;
            font-weight: 800;
        }
    }

    li {
        margin: 0;
        border-bottom: 1px solid #343434;
        padding: 20px;
        list-style-type: none;
        transition: all 0.3s;
    }

    li:hover {
        background-color: #555555;
        cursor: pointer;
        padding-left: 30px;
    }

    span {
        color: #333;
    }

    @media (min-width: 45.1rem) {
        display: none;
    }
`;

export default StyledMobileSidebar;