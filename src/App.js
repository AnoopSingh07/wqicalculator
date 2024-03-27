import React, { useState } from 'react';
import './App.css';
// import { useNavigate } from 'react-router-dom';
import WqiHome from './components/WqiHome.js';
import WqiResults from './components/WqiResults.js';
import { Route, Routes } from 'react-router';

function App() {
  // const navigate = useNavigate();
  const [wqi, setWqi] = useState(0);

  const resetWqi = () => {
    setWqi(0);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <div className="App">
              <WqiHome setWqi={setWqi} />
            </div>
          </>
        }
      />

      <Route
        exact
        path="/wqiResults"
        element={
          <>
            <div className="App">
              <WqiResults wqi={wqi} resetWqi={resetWqi} />
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default App;
