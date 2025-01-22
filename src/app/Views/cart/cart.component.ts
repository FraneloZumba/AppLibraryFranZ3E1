import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service'; // Ajusta el path si es necesario
import { IBook } from '../../Models/book.mode'; // Ajusta el path si es necesario.
import { IonicModule } from '@ionic/angular'; // Importa el módulo de Ionic

@Component({
  selector: 'app-cart',
  standalone: true, // Indica que es un componente standalone
  imports: [IonicModule], // Importa módulos de Ionic
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems: IBook[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cartItems$.subscribe((items) => (this.cartItems = items));
  }

  removeItem(bookId: number) {
    this.cartService.removeFromCart(bookId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
