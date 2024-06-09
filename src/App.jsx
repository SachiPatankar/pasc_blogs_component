import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import AuthenticationPage from './pages/AuthenticationPage';
import ForgotPswdPage from './pages/ForgotPswdPage';
import ChangePswdPage from './pages/ChangePswdPage';


function App() {
    return (
        <Fragment>
            <Routes>
              <Route path="/auth" element={<AuthenticationPage/>}/>
              <Route path="/forgot-pswd" element={<ForgotPswdPage/>}/>
              <Route path="change-pswd" element={<ChangePswdPage/>}/>
            </Routes>
        </Fragment>
    );
}


export default App;
