import { Component, inject } from '@angular/core'; // Importación de decoradores y utilidades de Angular.
import { ActivatedRoute, Router } from '@angular/router'; // Para manejar rutas activas y navegación.
import { IBook } from '../../Models/book.mode'; // Interfaz para el modelo de datos del libro.
import { BookService } from '../../Services/book.service'; // Servicio para obtener los libros.
import { NavController } from '@ionic/angular'; // Importar NavController de Ionic.
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true,
  imports: [IonicModule], // Agregar IonicModule a los imports
})
export class BookDetailComponent {
  // Propiedad para almacenar el libro seleccionado.
  bookSelected!: IBook;

  // Servicios inyectados para manejar rutas y datos.
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private bookService = inject(BookService);
  private navController = inject(NavController); // Inyección de NavController

  constructor() {
    // Subscríbete a los parámetros de la ruta activa.
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id']; // Obtiene el ID del parámetro de ruta.

      // Busca el libro con el ID proporcionado.
      const book = this.bookService.getBookById(Number(id));
      console.log(book);

      if (!book) {
        // Si no se encuentra el libro, redirige a la página "not-found".
        console.log('Book not found');
        this.route.navigate(['not-found', id]);
      } else {
        // Si se encuentra el libro, almacénalo en bookSelected.
        this.bookSelected = book;
      }
    });
  }

  // Método para regresar a la página principal.
  gotoHome(): void {
    this.navController.navigateBack('/'); // Usando NavController para regresar a la página principal
  }
}
