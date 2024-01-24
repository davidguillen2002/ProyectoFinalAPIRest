import React, { useState } from 'react';

function CalculadoraCalorias() {
    const [edad, setEdad] = useState('');
    const [sexo, setSexo] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [nivelActividad, setNivelActividad] = useState('');
    const [caloriasNecesarias, setCaloriasNecesarias] = useState(0);

    const calcularCalorias = () => {
        // Fórmula simplificada para el cálculo del GEB y GET
        // Esta fórmula puede variar y ser más específica.
        let geb = sexo === 'Hombre'
            ? (10 * peso) + (6.25 * altura) - (5 * edad) + 5
            : (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
        let factorActividad = nivelActividad === 'sedentario' ? 1.2
                            : nivelActividad === 'ligero' ? 1.375
                            : nivelActividad === 'moderado' ? 1.55
                            : nivelActividad === 'intenso' ? 1.725
                            : 1.9;
        let get = geb * factorActividad;
        setCaloriasNecesarias(get);
    };

    return (
        <div>
            <h2>Calculadora de Calorías</h2>
            <input type="number" value={edad} onChange={e => setEdad(e.target.value)} placeholder="Edad" />
            <select value={sexo} onChange={e => setSexo(e.target.value)}>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
            </select>
            <input type="number" value={peso} onChange={e => setPeso(e.target.value)} placeholder="Peso (kg)" />
            <input type="number" value={altura} onChange={e => setAltura(e.target.value)} placeholder="Altura (cm)" />
            <select value={nivelActividad} onChange={e => setNivelActividad(e.target.value)}>
                <option value="sedentario">Sedentario</option>
                <option value="ligero">Ligero</option>
                <option value="moderado">Moderado</option>
                <option value="intenso">Intenso</option>
                <option value="muy_intenso">Muy Intenso</option>
            </select>
            <button onClick={calcularCalorias}>Calcular</button>
            <p>Calorías necesarias: {caloriasNecesarias.toFixed(2)}</p>
        </div>
    );
}

export default CalculadoraCalorias;