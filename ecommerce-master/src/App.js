import './App.css';
import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {UserProvider} from './Components/Context';
import User from './Components/User';
import CardDisplay from './Components/CardDisplay';
import CartDisplay from './Components/CartDisplay';
// eslint-disable-next-line
import { I18nContext, useTranslation } from 'react-i18next';
import i18n from "i18next";
//import useTranslation from "react-i18next";

const changeLang = (l)=> {
  return ()=>{
    //alert("language has been changed to  "+l);
    i18n.changeLanguage(l);
  }
}
function App() {
  const { t } =useTranslation();
  return (
    <UserProvider>
      <Router>
        <div className='App'>
        <h1>{t('welcome to shopping')}</h1>
        <button onClick={changeLang('en') }>English</button>
        <button onClick={ changeLang('de') }>Dutch</button>
        <button onClick={changeLang('marathi') }>marathi</button>
        <Routes>
                 <Route exact path='/' element={<div>< User /><CardDisplay /></div>}></Route>
                 <Route exact path='/cart' element={< CartDisplay />}></Route>
        </Routes>
       
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

