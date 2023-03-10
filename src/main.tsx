import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import Menu from './Menu';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './NotFound';

const GlobalStyled = createGlobalStyle`
  * {
    background-color: #000;
    color: #fff;
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    <GlobalStyled/>
  </React.StrictMode>,
);
