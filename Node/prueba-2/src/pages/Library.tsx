// Hito 1 — Paso 3 y 7: Página Library que recibe y renderiza los libros
// Hito 2 — Paso 13: Paginación
// Hito 3 — Paso 15: 4 libros por página | Paso 16: Filtros

import { useState, useEffect } from 'react';
import { IBook } from '../types/Interfaces';
import Book from '../components/Book';

interface LibraryProps {
  books: IBook[];
}

const BOOKS_PER_PAGE = 4;

const Library = ({ books }: LibraryProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'todos' | 'leido' | 'pendiente'>('todos');

  // Hito 3 — Paso 16: Filtrado con useEffect para resetear página al filtrar
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, statusFilter]);

  // Libros filtrados
  const filteredBooks = books.filter(book => {
    const matchesText = book.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || book.status === statusFilter;
    return matchesText && matchesStatus;
  });

  // Hito 3 — Paso 15: Paginación de 4 en 4
  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
  const startIndex = (currentPage - 1) * BOOKS_PER_PAGE;
  const booksOnPage = filteredBooks.slice(startIndex, startIndex + BOOKS_PER_PAGE);

  const goToPrev = () => setCurrentPage(p => Math.max(1, p - 1));
  const goToNext = () => setCurrentPage(p => Math.min(totalPages, p + 1));

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      {/* Hito 3 — Paso 16: Zona de filtros */}
      <section
        className="mb-8 p-5 rounded-2xl flex flex-col md:flex-row gap-4 items-center"
        style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
      >
        <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--color-muted)' }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
          </svg>
          Filtros
        </div>

        {/* Buscador por nombre */}
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
            style={{ color: 'var(--color-muted)' }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por título..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none transition-all"
            style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-body)',
            }}
          />
        </div>

        {/* Selector de estado */}
        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value as 'todos' | 'leido' | 'pendiente')}
          className="px-4 py-2 rounded-lg text-sm outline-none cursor-pointer"
          style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text)',
            fontFamily: 'var(--font-body)',
          }}
        >
          <option value="todos">📚 Todos los libros</option>
          <option value="leido">✅ Solo leídos</option>
          <option value="pendiente">⏳ Solo pendientes</option>
        </select>

        {/* Contador */}
        <span className="text-sm font-semibold" style={{ color: 'var(--color-muted)', whiteSpace: 'nowrap' }}>
          {filteredBooks.length} libro{filteredBooks.length !== 1 ? 's' : ''}
        </span>
      </section>

      {/* Título de sección */}
      <div className="mb-6 flex items-center gap-4">
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}
        >
          Colección de libros
        </h2>
        <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
        <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
          Página {totalPages > 0 ? currentPage : 0} de {totalPages}
        </span>
      </div>

      {/* Grid de libros — 4 por fila (Hito 1 Paso 3 + Hito 3 Paso 15) */}
      {booksOnPage.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {booksOnPage.map((book, index) => (
            <div
              key={book.isbn}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <Book {...book} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20" style={{ color: 'var(--color-muted)' }}>
          <span className="text-5xl mb-4 block">🔍</span>
          <p className="text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            No se encontraron libros
          </p>
          <p className="text-sm mt-1">Prueba con otros filtros</p>
        </div>
      )}

      {/* Paginación (Hito 2 Paso 13 + Hito 3 Paso 15) */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            onClick={goToPrev}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80 active:scale-95 cursor-pointer"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-accent-gold)',
              border: 'none',
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Anterior
          </button>

          {/* Números de página */}
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className="w-9 h-9 rounded-full text-sm font-bold transition-all duration-200 hover:opacity-80 cursor-pointer"
                style={{
                  background: page === currentPage ? 'var(--color-accent)' : 'var(--color-surface)',
                  color: page === currentPage ? '#fff' : 'var(--color-primary)',
                  border: `1px solid ${page === currentPage ? 'var(--color-accent)' : 'var(--color-border)'}`,
                }}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-80 active:scale-95 cursor-pointer"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-accent-gold)',
              border: 'none',
            }}
          >
            Siguiente
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </main>
  );
};

export default Library;
