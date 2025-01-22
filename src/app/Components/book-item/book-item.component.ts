import { Component, Input } from '@angular/core';
import { IBook } from '../../Models/book.mode'; // Asegúrate de que la ruta sea correcta
import { CartService } from '../../Services/cart.service'; // Asegúrate de que la ruta sea correcta
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importa el módulo de Ionic

@Component({
  selector: 'app-book-item',
  standalone: true, // Standalone component
  imports: [IonicModule], // Importa módulos de Ionic
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent {
  @Input() item!: IBook;

  constructor(private cartService: CartService, private route: Router) { }

  addToCart(item: IBook): void {
    this.cartService.addToCart(item); // Llamar al servicio para agregar el item
  }

  navigateToID() {
    this.route.navigate(['books', this.item.id]);
  }
}
