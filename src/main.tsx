import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import Menu from './Menu';

const GlobalStyled = createGlobalStyle`
  * {
    background-color: #000;
    color: #fff;
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<App />}/>
      </Routes>
    </BrowserRouter>
    <GlobalStyled/>
  </React.StrictMode>,
);
