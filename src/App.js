import React from 'react';
import './App.css';
import Clock from './Clock';
import Footer from './Footer';
function App() {
  return (
    <div className='bg-gray-900 w-full'>
      <Clock></Clock>
      <Footer></Footer>
    </div>
  );
}

export default App;
