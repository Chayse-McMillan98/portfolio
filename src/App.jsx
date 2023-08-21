import { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Main/>
        <Work/>
      </div>
    </>
  )
}

export default App
