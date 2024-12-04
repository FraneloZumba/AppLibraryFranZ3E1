import { Component, inject } from '@angular/core';
import { IBook } from '../../Models/book.mode'; // Importa el modelo de datos para libros.
import { BookItemComponent } from '../../Components/book-item/book-item.component'; // Importa el componente BookItem.
import { NgFor } from '@angular/common'; // Para iterar sobre la lista de libros.
import { BookService } from '../../Services/book.service'; // Importa el servicio para obtener los libros.

@Component({
  selector: 'app-books-list', // Nombre del selector para este componente.
  imports: [BookItemComponent, NgFor], // Importa el componente y las directivas necesarias.
  templateUrl: './book-list.component.html', // Ruta del archivo HTML del componente.
  styleUrls: ['./book-list.component.css'], // Ruta del archivo CSS del componente.
  standalone: true, // Indica que este componente es standalone.
})
export class BooksListComponent {
  // Inyecta el servicio BookService para obtener los datos.
  private bookService = inject(BookService);

  // Lista de libros que se obtiene del servicio.
  listaLibros: IBook[] = this.bookService.getBooks();
}
