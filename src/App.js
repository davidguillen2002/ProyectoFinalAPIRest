import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlimentoDetalle from './AlimentoDetalle';
import CalculadoraCalorias from './CalculadoraCalorias';

function App() {
    const [alimentos, setAlimentos] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8000/api/alimentos/?search=${query}`)
            .then(response => response.json())
            .then(data => setAlimentos(data))
            .catch(error => console.error('Error:', error));
    }, [query]);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Alimentos</h1>
                    <nav>
                        {/* Menú de Navegación */}
                        <Link to="/">Inicio</Link> | {" "}
                        <Link to="/alimentos">Lista de Alimentos</Link> | {" "}
                        <Link to="/calculadora-calorias">Calculadora de Calorías</Link>
                    </nav>

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <ul>
                        {alimentos.map(alimento => (
                            <li key={alimento.id}>
                                <Link to={`/alimento/${alimento.id}`}>{alimento.nombre}</Link>
                            </li>
                        ))}
                    </ul>
                </header>
                <Routes>
                    <Route path="/" element={<div>Inicio</div>} exact />
                    <Route path="/alimento/:id" element={<AlimentoDetalle />} />
                    <Route path="/calculadora-calorias" element={<CalculadoraCalorias />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;