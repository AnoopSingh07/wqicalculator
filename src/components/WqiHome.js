import React, { useState } from 'react';
import "./WqiHome.css";
import { useNavigate } from "react-router-dom";
import Logo from "../waterdrop.png";
import "../App.css";
import Reasons from  "./Reasons.js";
export let wqi = 0;
export const exceedingParams = [];
function WqiHome() {

    const navigate = useNavigate();
    const S = [1500, 100, 3, 10, 300, 250, 400, 1];
    let W = [1, 1, 1, 1, 1, 1, 1, 1];
    let Q = [0, 0, 0, 0, 0, 0, 0, 0];
    let parameters =
    {
        TDS: '',
        TSS: '',
        BOD: '',
        OilContent: '',
        TotalHardness: '',
        COD: '',
        Sulphate: '',
        ResidualChlorine: ''
    }
    const [parametervalue, setParametervalue] = useState(parameters);
    // console.log(parametervalue);


    let k = 0, k2 = 0;
    // let wqi=0;
    //calculated by the method of Brown et.al. 1972
    const calculateMWQI = () => {
        wqi = 0;
        let sumW=0;
        console.log('1/Sn:');
        for (let i = 0; i < 8; i++) {
            k2 += 1 / (S[i]);
            console.log(1/S[i]);
        }
        console.log('k2=summation of 1/Sn='+ k2);
        k = 1 / k2;
        console.log('k='+ k);
        console.log('Wn=k/Sn:');
        for (let i = 0; i < 8; i++) {
            W[i] = (W[i] * k) / S[i];
            console.log(W[i]);
            sumW+=W[i];
        }
        let m = 0;
        console.log('Qm=Vn*100/Sm:');
        Object.values(parametervalue).forEach(e => {
            Q[m] = (e * 100) / S[m];
            console.log(Q[m]);
            m++;
        });
        console.log('index of each parameter=Wn*Qn:');
        for (let i = 0; i < 8; i++) {
            wqi += (W[i] * Q[i]);
            console.log(W[i]*Q[i]);
        }
        console.log("wqi=" +wqi/sumW);
        return wqi/sumW;
    };
    //sample 1-

    const handleChange = e => {
        const { name, value } = e.target
        setParametervalue({
            ...parametervalue,
            [name]: value
        })
    }

    const estimate = e => {
        // Check if any parameter value is NaN
        Object.entries(parametervalue).forEach(([param, value], index) => {
            if (value !== '' && value > S[index]) {
                exceedingParams.push([param, value, S[index], Reasons[index]]);
            }
        });
        if (Object.values(parametervalue).some(input => input === '')) {
            alert('Please fill in all input fields.');
        } else {
            // Calculate your result based on the input values
            console.log(calculateMWQI());
            navigate("/wqiResults");
        }
    }

    return (
        <>
            <header className="App-header">
                <img className='logo' src={Logo} alt="logo" />
                <div className='heading'>
                    <h2>Mine Water Quality Index</h2>
                    <h2>Calculator</h2>
                </div>
            </header>
            <div className='centeredDiv'>
                <div className='landing'>
                    <div className='dimension'>
                        <div className='instruction'><h5>Enter the experimental data</h5></div>
                        <div className='table'>
                            <div className='row'>
                                <div className='title1 coldiv1'><h3>Parameters</h3></div>
                                <div className='title2 coldiv2'><h3>Value</h3></div>
                            </div>
                            {Object.keys(parameters).map((param, index) => (
                                <div key={index} className='row'>
                                    <div className='element1 coldiv1'><h5>{param}</h5></div>
                                    <div className='element2 coldiv2'>
                                        <input type="number" name={param} value={parametervalue[param]} onChange={handleChange} className="dimensionInput" placeholder="mg/l" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='dimensionButtons'>
                        <button className="estimate" onClick={estimate}>Calculate MWQI</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WqiHome
