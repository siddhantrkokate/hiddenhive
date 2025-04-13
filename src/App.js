import './App.css';
import React from "react";
import { Header } from './code/desktop/Common/Header/Header.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './code/desktop/Home/Home.js';
import {AddNew} from './code/desktop/AddNew/AddNew.js'
import {View} from './code/desktop/View/View.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addNew' element={<AddNew />} />
        <Route path='/view' element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
