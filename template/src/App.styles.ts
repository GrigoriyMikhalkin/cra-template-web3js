import styled, { keyframes } from "styled-components";

const App = styled.div`
    text-align: center;
`;

const logoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    
    @media (prefers-reduced-motion: no-preference) {
        animation: ${logoSpin} infinite 20s linear;
    }
`;

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const AppLink = styled.a`
    color: #61dafb;
`;

const Styled = {
    App,
    AppLogo,
    AppHeader,
    AppLink
}

export default Styled;