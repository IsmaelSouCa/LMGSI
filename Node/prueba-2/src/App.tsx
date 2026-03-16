// App.tsx
// Hito 1 — Paso 7: Constante books de tipo IBook[] que se pasa a Library
// Hito 2 — Paso 11: useState dataBook
// Hito 3 — Paso 14: 16 libros en el array

import { useState } from 'react';
import Header from './components/Header';
import Library from './pages/Library';
import { IBook } from './types/Interfaces';

const initialBooks: IBook[] = [
  {
    isbn: '978-0-7432-7356-5',
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    cover: 'https://covers.openlibrary.org/b/isbn/9780060883287-L.jpg',
    published: '1967',
    status: 'leido',
    isFavorite: true,
    category: 'Novela',
  },
  {
    isbn: '978-84-376-0494-7',
    title: 'La casa de los espíritus',
    author: 'Isabel Allende',
    cover: 'https://covers.openlibrary.org/b/isbn/9780553273915-L.jpg',
    published: '1982',
    status: 'leido',
    isFavorite: false,
    category: 'Novela',
  },
  {
    isbn: '978-0-374-52770-5',
    title: 'El nombre de la rosa',
    author: 'Umberto Eco',
    cover: 'https://covers.openlibrary.org/b/isbn/9780156001311-L.jpg',
    published: '1980',
    status: 'pendiente',
    isFavorite: true,
    category: 'Misterio',
  },
  {
    isbn: '978-0-14-028329-7',
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
    cover: 'https://covers.openlibrary.org/b/isbn/9780060934347-L.jpg',
    published: '1605',
    status: 'leido',
    isFavorite: true,
    category: 'Clásico',
  },
  {
    isbn: '978-0-06-112008-4',
    title: 'Matar a un ruiseñor',
    author: 'Harper Lee',
    cover: 'https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg',
    published: '1960',
    status: 'leido',
    isFavorite: true,
    category: 'Drama',
  },
  {
    isbn: '978-0-7432-7357-2',
    title: '1984',
    author: 'George Orwell',
    cover: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
    published: '1949',
    status: 'leido',
    isFavorite: false,
    category: 'Distopía',
  },
  {
    isbn: '978-0-684-80122-3',
    title: 'El viejo y el mar',
    author: 'Ernest Hemingway',
    cover: 'https://covers.openlibrary.org/b/isbn/9780684801223-L.jpg',
    published: '1952',
    status: 'pendiente',
    isFavorite: false,
    category: 'Clásico',
  },
  {
    isbn: '978-0-14-028330-3',
    title: 'Crimen y castigo',
    author: 'Fiódor Dostoyevski',
    cover: 'https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg',
    published: '1866',
    status: 'pendiente',
    isFavorite: true,
    category: 'Clásico',
  },
  {
    isbn: '978-0-06-093546-9',
    title: 'Un mundo feliz',
    author: 'Aldous Huxley',
    cover: 'https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg',
    published: '1932',
    status: 'leido',
    isFavorite: false,
    category: 'Distopía',
  },
  {
    isbn: '978-0-7432-7355-8',
    title: 'El Principito',
    author: 'Antoine de Saint-Exupéry',
    cover: 'https://covers.openlibrary.org/b/isbn/9780156013987-L.jpg',
    published: '1943',
    status: 'leido',
    isFavorite: true,
    category: 'Fábula',
  },
  {
    isbn: '978-0-14-028331-0',
    title: 'Los miserables',
    author: 'Victor Hugo',
    cover: 'https://covers.openlibrary.org/b/isbn/9780451525260-L.jpg',
    published: '1862',
    status: 'pendiente',
    isFavorite: false,
    category: 'Clásico',
  },
  {
    isbn: '978-0-7432-7358-9',
    title: 'La metamorfosis',
    author: 'Franz Kafka',
    cover: 'https://covers.openlibrary.org/b/isbn/9780553213690-L.jpg',
    published: '1915',
    status: 'leido',
    isFavorite: false,
    category: 'Ficción',
  },
  {
    isbn: '978-0-374-52771-2',
    title: 'Sapiens: De animales a dioses',
    author: 'Yuval Noah Harari',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg',
    published: '2011',
    status: 'leido',
    isFavorite: true,
    category: 'Ensayo',
  },
  {
    isbn: '978-0-525-55360-5',
    title: 'El alquimista',
    author: 'Paulo Coelho',
    cover: 'https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg',
    published: '1988',
    status: 'pendiente',
    isFavorite: false,
    category: 'Novela',
  },
  {
    isbn: '978-0-06-093548-3',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    cover: 'https://covers.openlibrary.org/b/isbn/9781451673319-L.jpg',
    published: '1953',
    status: 'pendiente',
    isFavorite: true,
    category: 'Distopía',
  },
  {
    isbn: '978-0-14-028332-7',
    title: 'Orgullo y prejuicio',
    author: 'Jane Austen',
    cover: 'https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg',
    published: '1813',
    status: 'leido',
    isFavorite: true,
    category: 'Romance',
  },
];

function App() {
  // Hito 2 — Paso 11: useState para los datos de los libros
  const [dataBook] = useState<IBook[]>(initialBooks);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Hito 1 — Paso 2: Header */}
      <Header />

      {/* Hito 1 — Paso 3 y 7: Library recibe los libros como prop */}
      <Library books={dataBook} />

      {/* Footer */}
      <footer
        className="text-center py-6 text-xs"
        style={{
          borderTop: '1px solid var(--color-border)',
          color: 'var(--color-muted)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>My Book App</span>
        {' '}— LMSGI 25-26 · React + Vite + TypeScript + Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
