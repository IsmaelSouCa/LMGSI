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
        return <div className="text-blue-500 text-center ">Cargando vinos...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="p-10 bg-amber-50 min-h-screen font-serif">
            <h1 className="text-4xl mb-2 text-center text-slate-900">Bodega de Ismael</h1>
            <h2 className="text-sm text-center mb-12 text-amber-700">SELECCIÓN EXCLUSIVA <br />https://bodega-inky.vercel.app/</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wines.map((wine) => (
                    <li key={wine.id} className="group border border-gray-100 p-8 rounded shadow-sm 
                        hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col
                        duration-500 items-center bg-white h-auto text-center justify-between">
                        <div className="h-64 mb-6 flex items-center justify-center">
                            <img src={wine.image} alt={wine.wine} className="w-full h-full object-contain 
                                group-hover:scale-110 transition-all duration-600" />
                        </div>
                        <div className="flex flex-col items-center justify-between w-full">
                            <p className="text-sm uppercase text-stone-400 font-sans">{wine.winery}</p>
                            <h2 className="text-xl font-semibold text-slate-900 min-h-20 mb-2 flex items-center">{wine.wine}</h2>
                            <div className="w-16 h-px bg-amber-700 mb-6"></div>
                            <p className="text-xs text-stone-500 font-sans italic mb-4">Ubicación: {wine.location}</p>
                            <div className="flex justify-between min-w-auto w-full">
                                <p className='text-amber-700 text-sm'>★ {wine.rating.average}</p>
                                <p className='text-stone-500 text-sm'>{wine.rating.reviews}</p>
                            </div>
                        </div>
                </li>
            ))}
            </ul>
        </div>
        


    );
}