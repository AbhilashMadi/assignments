
import React from 'react'
import {Navbar,Footer,Landing} from "./components/export";
import { DataContextProvider } from './context/ContextProvider';

import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <DataContextProvider>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Landing />}/>
        </Routes>
        <Footer />
      </DataContextProvider>
    </div>
  );
}

export default App;