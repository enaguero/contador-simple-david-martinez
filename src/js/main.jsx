import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'
import SecondsCounter from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));

const COUNTER_INTERVAL_MS = 1000;

let counter = 0;
let intervalId = null;
let alertTime = null; // Variable para el Bonus de la alerta

// FUNCIÓN DE RENDERIZADO ÚNICA (Para que los botones funcionen siempre)
const renderApp = () => {
    root.render(
        <React.StrictMode>
            <div className="text-center mt-5">
                <SecondsCounter seconds={counter} /> 
                
                <div className="mt-4 p-3 bg-dark text-white rounded d-inline-block border border-secondary">
                    <label className="me-2">Alertar en segundo:</label>
                    <input 
                        type="number"
                        min="0" 
                        placeholder="Ej: 10"
                        className="form-control d-inline-block w-25"
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            alertTime = (!isNaN(value) && value >= 0) ? value : null;
                        }} 
                    />
                </div>

                <div className="mt-4">
                    <button className="btn btn-warning mx-2" onClick={stopCounter}>Pausar</button>
                    <button className="btn btn-success mx-2" onClick={startCounter}>Resumir</button>
                    <button className="btn btn-danger mx-2" onClick={resetCounter}>Reiniciar</button>
                </div>
            </div>
        </React.StrictMode>
    );

    if (alertTime !== null && counter === alertTime) {
        alert(`¡Atención! Has alcanzado el segundo ${alertTime}`);
    }
};

const startCounter = () => {
    if (intervalId) return; 
    intervalId = setInterval(() => {
        counter++;
        renderApp(); 
    }, COUNTER_INTERVAL_MS);
};

const stopCounter = () => {
    clearInterval(intervalId);
    intervalId = null;
    renderApp(); 
};

const resetCounter = () => {
    stopCounter();
    counter = 0;
    renderApp();
    startCounter(); 
};

renderApp();
startCounter();