// Hito 1 — Pasos 4 y 5: Componente Book con props
// Hito 2 — Pasos 10 y 12: useState para favorito y estado de lectura

import { useState } from 'react';
import { IBook } from '../types/Interfaces';
import IconButton from './IconButton';

interface BookProps extends IBook {}

const Book = ({
  isbn,
  title,
  author,
  cover,
  published,
  status,
  isFavorite,
  category,
}: BookProps) => {
  // Hito 2 — Paso 10: estado favorito
  const [statusFav, setStatusFav] = useState<boolean>(isFavorite);

  // Hito 2 — Paso 12: estado lectura
  const [readStatus, setReadStatus] = useState<'leido' | 'pendiente'>(status);

  const toggleFav = () => setStatusFav(prev => !prev);
  const toggleReadStatus = () =>
    setReadStatus(prev => (prev === 'leido' ? 'pendiente' : 'leido'));

  const isRead = readStatus === 'leido';

  return (
    <div
      className="book-card fade-in-up rounded-xl overflow-hidden flex flex-col"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 4px 16px rgba(44,24,16,0.08)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Portada */}
      <div className="relative overflow-hidden" style={{ height: '220px', background: '#e8ddd0' }}>
        <img
          src={cover}
          alt={`Portada de ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://via.placeholder.com/300x220/c9a84c/2c1810?text=${encodeURIComponent(title.slice(0, 15))}`;
          }}
        />
        {/* Badge categoría */}
        <span
          className="absolute top-2 left-2 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full"
          style={{ background: 'var(--color-primary)', color: 'var(--color-accent-gold)' }}
        >
          {category}
        </span>
        {/* Badge favorito en esquina */}
        <div className="absolute top-2 right-2">
          <IconButton status={statusFav} callback={toggleFav} />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        {/* Título */}
        <h3
          className="font-bold text-base leading-tight line-clamp-2"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}
          title={title}
        >
          {title}
        </h3>

        {/* Autor */}
        <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
          <span className="font-semibold">Autor:</span> {author}
        </p>

        {/* ISBN + Fecha */}
        <div className="text-xs flex flex-col gap-0.5" style={{ color: 'var(--color-muted)' }}>
          <span><span className="font-semibold">ISBN:</span> {isbn}</span>
          <span><span className="font-semibold">Publicado:</span> {published}</span>
        </div>

        {/* Separador */}
        <div className="mt-auto pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
          {/* Badge estado */}
          <div className="flex items-center justify-between">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                isRead
                  ? 'bg-green-100 text-green-800'
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              {isRead ? '✓ Leído' : '⏳ Pendiente'}
            </span>

            {/* Botón cambiar estado */}
            <button
              onClick={toggleReadStatus}
              className="text-xs font-semibold px-3 py-1 rounded-full transition-all duration-200 hover:opacity-80 active:scale-95 cursor-pointer"
              style={{
                background: isRead ? '#fef3c7' : 'var(--color-primary)',
                color: isRead ? '#92400e' : 'var(--color-accent-gold)',
                border: 'none',
              }}
            >
              {isRead ? 'Marcar pendiente' : 'Marcar leído'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
