import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBook } from '@models/book.mode';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: IBook[] = [];
  private cartItemsSubject = new BehaviorSubject<IBook[]>(this.cartItems);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(book: IBook) {
    this.cartItems.push(book);
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(bookId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== bookId);
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems() {
    return [...this.cartItems];
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}