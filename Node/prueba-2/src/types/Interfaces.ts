// Interfaz IBook — define la estructura de cada libro de la biblioteca

export interface IBook {
  isbn: string;
  title: string;
  author: string;
  cover: string;
  published: string;
  status: 'leido' | 'pendiente';
  isFavorite: boolean;
  category: string;
}
