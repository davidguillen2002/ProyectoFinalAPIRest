// AlimentoDetalle.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AlimentoDetalle = () => {
    const [alimento, setAlimento] = useState(null);
    const { id } = useParams(); // Obtiene el ID del alimento de la URL

    useEffect(() => {
        fetch(`http://localhost:8000/api/alimentos/${id}/`) // Asegúrate de que la URL sea correcta
            .then(response => response.json())
            .then(data => setAlimento(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    if (!alimento) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h2>{alimento.nombre}</h2>
            <p>Calorías: {alimento.calorias}</p>
            <p>Proteínas: {alimento.proteinas}</p>
            <p>Carbohidratos: {alimento.carbohidratos}</p>
            <p>Grasas: {alimento.grasas}</p>
            <h3>Nutrientes:</h3>
            <ul>
                {alimento.nutrientes.map(nutriente => (
                    <li key={nutriente.id}>
                        {nutriente.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlimentoDetalle;