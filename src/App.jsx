import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <Fragment>
            <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
        </Fragment>
    );
}

export default App;
