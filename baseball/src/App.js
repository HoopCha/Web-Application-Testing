import React, { useState } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [stats, setStats] = useState({
    balls: 0,
    strikes: 0
  })


  return (
    <div className="App">
      <h1> Baseball </h1>
      <Display count={stats}/>
      <Dashboard count={stats} updateStat={setStats}/>
    </div>
  );
}

export default App;