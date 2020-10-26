import React from 'react';
import logo from './logo.svg';
import Styled from "./App.styles";

function App() {
    return (
        <Styled.App>
            <Styled.AppHeader>
                <Styled.AppLogo src={logo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Styled.AppLink
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </Styled.AppLink>
            </Styled.AppHeader>
        </Styled.App>
    );
}

export default App;