// Hito 1 — Paso 2: Componente Header reutilizable

const Header = () => {
  return (
    <header
      style={{
        background: 'var(--color-primary)',
        borderBottom: '3px solid var(--color-accent-gold)',
      }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Título */}
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden="true">📚</span>
          <div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-accent-gold)',
                letterSpacing: '0.02em',
              }}
              className="text-2xl font-bold leading-none"
            >
              Mi Biblioteca
            </h1>
            <p
              style={{ color: '#c9b89a', fontFamily: 'var(--font-body)' }}
              className="text-xs uppercase tracking-widest mt-0.5"
            >
              Colección personal de libros
            </p>
          </div>
        </div>

        {/* Decoración central */}
        <div className="hidden md:flex items-center gap-2" style={{ color: '#c9b89a' }}>
          <span className="text-xs uppercase tracking-widest opacity-60">✦ Leer es vivir ✦</span>
        </div>

        {/* Icono derecha */}
        <div
          style={{
            border: '1px solid var(--color-accent-gold)',
            color: 'var(--color-accent-gold)',
          }}
          className="rounded-full p-2 opacity-80"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
