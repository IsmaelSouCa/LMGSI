import React, { useEffect, useState } from 'react';
import { wineService } from '../services/wineService';
import type { WineDetails } from '../interfaces/wines';
import '../App.css';

export const WinesDashboard: React.FC = () => {
    const [wines, setWines] = useState<WineDetails[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchWines = async () => {
            try {
                setLoading(true);
                const winesData = await wineService.getWines();
                setWines(winesData);
            } catch (err) {
                setError("Error al cargar los vinos.");
            } finally {
                setLoading(false);
            }
        };

        fetchWines();
    }, []);

    if (loading) {
        return <div className="text-blue-500 text-center">Cargando vinos...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="p-10 bg-gray-200">
            <h1 className="text-2xl font-bold mb-4 text-center">Dashboard de Vinos</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wines.map((wine) => (
                <li key={wine.id} className="p-6 rounded shadow hover:shadow-lg transition flex justify-between items-center bg-white h-auto">
                <img src={wine.image} alt={wine.wine} className="w-16 h-full object-cover rounded hover:scale-110 transition" />
                <div className="flex flex-col justify-between ml-4 text-right">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{wine.wine}</h2>
                    <p className="text-lg font-semibold text-gray-600">{wine.winery}</p>
                    <p className="text-md text-gray-500">Ubicación: {wine.location}</p>
                    <p className="text-md text-gray-500">Calificación: {wine.rating.average} ({wine.rating.reviews} reseñas)</p>
                </div>
                </li>
            ))}
            </ul>
        </div>
    );
}