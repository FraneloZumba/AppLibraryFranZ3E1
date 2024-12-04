import { Injectable } from '@angular/core';
import { IBook } from '../Models/book.mode';

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible en toda la aplicación.
})
export class BookService {
  // Lista estática de libros como ejemplo.
  private listaLibros: IBook[] = [
    { id: 1, title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'Cien Años de Soledad', author: 'Gabriel García Márquez' },
    { id: 4, title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
    { id: 5, title: 'Orgullo y Prejuicio', author: 'Jane Austen' },
    { id: 6, title: 'Moby Dick', author: 'Herman Melville' },
    { id: 7, title: 'El Gran Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 8, title: 'Crimen y Castigo', author: 'Fiódor Dostoyevski' },
    { id: 9, title: 'El viejo y el mar', author: 'Ernest Hemingway' },
    { id: 10, title: 'La Metamorfosis', author: 'Franz Kafka' },
    { id: 11, title: 'El Amor en los Tiempos del Cólera', author: 'Gabriel García Márquez' },
    { id: 12, title: 'Cumbres Borrascosas', author: 'Emily Brontë' },
    { id: 13, title: 'Los Miserables', author: 'Victor Hugo' },
    { id: 14, title: 'Fahrenheit 451', author: 'Ray Bradbury' },
    { id: 15, title: 'El Retrato de Dorian Gray', author: 'Oscar Wilde' },
    { id: 16, title: 'La Casa de los Espíritus', author: 'Isabel Allende' },
    { id: 17, title: 'El Alquimista', author: 'Paulo Coelho' },
    { id: 18, title: 'La Sombra del Viento', author: 'Carlos Ruiz Zafón' },
    { id: 19, title: 'El Hobbit', author: 'J.R.R. Tolkien' },
    { id: 20, title: 'Harry Potter y la Piedra Filosofal', author: 'J.K. Rowling' },
  ];

  constructor() {}

  /**
   * Obtiene todos los libros.
   * @returns Lista de libros (Ibook[]).
   */
  getBooks(): IBook[] {
    return this.listaLibros; // Retorna la lista de libros.
  }

  /**
   * Busca un libro por su ID.
   * @param id Identificador del libro.
   * @returns Un libro (Ibook) o 'undefined' si no existe.
   */
  getBookById(id: number): IBook | undefined {
    // Itera por la lista de libros y compara el ID.
    return this.listaLibros.find(book => book.id === id); // Retorna el libro si lo encuentra.
  }
}