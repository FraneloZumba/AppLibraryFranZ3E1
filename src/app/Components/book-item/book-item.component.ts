import { Component, inject, Input } from '@angular/core';
import { IBook } from '../../Models/book.mode';
import { Router } from '@angular/router'; // Solo necesitas Router aquí.

@Component({
  selector: 'app-book-item', // 🏷️ Selector para usar este componente en plantillas.
  imports: [], // 📜 Lista de módulos importados (vacío por ahora).
  templateUrl: './book-item.component.html', // 🖼️ Plantilla HTML para este componente.
  styleUrl: './book-item.component.css' // 🎨 Estilo CSS específico del componente.
})
export class BookItemComponent {
  route = inject(Router); // 🚀 Inyección de dependencia para la navegación.
  @Input() item!: IBook; // 📖 Propiedad de entrada que representa un libro.

  navigateToID() {
    // 🌟 Navega a la ruta específica del libro según su ID.
    this.route.navigate(['books', this.item.id]);
  }
}
