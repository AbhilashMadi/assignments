
import React from 'react'
import {Navbar,Footer,Landing,NotFound} from "./components/export";
import { DataContextProvider } from './context/ContextProvider';

import {Route,Routes} from "react-router-dom";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className='app'>
      <DataContextProvider>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Landing />}/>
          <Route exact path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </DataContextProvider>
    </div>
  );
}

export default App;