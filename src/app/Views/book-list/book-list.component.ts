import { Component, inject } from '@angular/core';
import { IBook } from '../../Models/book.mode';
import { BookItemComponent } from '../../Components/book-item/book-item.component';
import { NgFor } from '@angular/common';
import { BookService } from '../../Services/book.service';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule

@Component({
  selector: 'app-books-list',
  imports: [BookItemComponent, NgFor, IonicModule], // Importar IonicModule aquí
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  standalone: true,
})
export class BooksListComponent {
  private bookService = inject(BookService);
  listaLibros: IBook[] = this.bookService.getBooks();
}
