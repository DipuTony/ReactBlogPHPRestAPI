import Navbar from './component/Navbar';
import Home from './component/Home';
import React from 'react';

function App() {


  return (
    <div className="App">
      <Navbar />
     <div className="content">
       <Home />
     </div>
    </div>
  );
}

export default App;
