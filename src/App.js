import React, { useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import O1 from './components/O1';
import O2 from './components/O2';
import O3 from './components/O3';
import O4 from './components/O4';
import O5 from './components/O5';
import O6 from './components/O6';
import O7 from './components/O7';
import O8 from './components/O8';
import O9 from './components/O9';
import O10 from './components/O10';
import O11 from './components/O11';
import O12 from './components/O12';
import Pod from './components/Pod';
import { Routes, Route } from 'react-router-dom';

function App() {
  const o12Ref = useRef(null);

  return (
    <div className='App'>
      <Navbar o12Ref={o12Ref} />
      <Routes>
        <Route path='/pod' element={<Pod />} />
        <Route path='/*' element={<>
          <O1 />
          <O2 />
          <O3 />
          <O4 />
          <O5 />
          <O6 />
          <O7 />
          <O8 />
          <O9 />
          <O10 />
          <O11 />
          <O12 ref={o12Ref} />
        </>} />
      </Routes>
    </div>
  );
}

export default App;
