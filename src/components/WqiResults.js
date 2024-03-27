import React from 'react';
import "./Results.css";
import Logo from "../waterdrop.png";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { wqi, exceedingParams } from "./WqiHome.js";

function WqiResults() {
  const navigate = useNavigate();

  const clearExceedingParams = () => {
    exceedingParams.length = 0; // Empty the exceedingParams array
  };

  const Exit = e => {
    clearExceedingParams(); // Clear the exceedingParams array
    navigate("/");
  };

  const getWQIDomain = () => {
    if (wqi <= 25) {
      return "Excellent";
    } else if (wqi <= 50) {
      return "Good";
    } else if (wqi <= 75) {
      return "Poor";
    } else if (wqi <= 100) {
      return "Very Poor";
    } else {
      return "Unfit for consumption";
    }
  };

  const getWQIColor = () => {
    if (wqi <= 25) {
      return "green";
    } else if (wqi <= 50) {
      return "lightgreen";
    } else if (wqi <= 75) {
      return "orange";
    } else if (wqi <= 100) {
      return "red";
    } else {
      return "darkred";
    }
  };

  return (<>
  <div className='container'>
    <header className="App-header">
      <img className='logo' src={Logo} alt="logo" />
      <div className='heading'>
        <h2>Mine Water Quality Index</h2>
        <h2>Calculator</h2>
      </div>
    </header>
    <div className='results'>
      <div>
        <h2>MWQI : <span style={{ color: getWQIColor() }}>{wqi}</span> - {getWQIDomain()}</h2>
      </div>
      <div>
        <h2>Exceeding Parameters:</h2>
        <ul>
          {exceedingParams.map((param, index) => (
            <li key={index}><h2 style={{ color: "red" }}>{`${param[3].parameter}: ${param[1]} / ${param[2]}`}</h2>
              <div className='review'><p>Probable Reasons: {param[3].probableReasons}</p>
              <p>Explanation: {param[3].explanation}</p>
              <p>Potential Solutions: {param[3].potentialSolutions}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="exitResult" onClick={Exit}>Exit</button>
    </div>
    </div>
  </>
  );
}

export default WqiResults;
