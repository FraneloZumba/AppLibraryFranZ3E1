import { Injectable } from '@angular/core';
import { IBook } from '../Models/book.mode';

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible en toda la aplicación.
})
export class BookService {
  // Lista estática de productos como ejemplo.
  private listaLibros: IBook[] = [
    { 
      id: 1, 
      title: 'Camiseta Básica', 
      price: 19.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLqzaO44dve0XXcWkkcksGPbWnkz-r8QDoQ&s' 
    },
    { 
      id: 2, 
      title: 'Jeans Slim Fit', 
      price: 39.99,
      imageUrl: 'https://media.istockphoto.com/id/1022386222/es/foto/pantalones-rotos-azul-aislados.jpg?s=612x612&w=0&k=20&c=gQjnUXRPSBqmwAWT25P6ucoS7YyHPzgpTEbqrJysT_4=' 
    },
    { 
      id: 3, 
      title: 'Zapatos Deportivos', 
      price: 59.99,
      imageUrl: 'https://i.redd.it/9j9gdiudx3781.jpg' 
    },
    { 
      id: 4, 
      title: 'Bolso de Mano', 
      price: 49.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51h6BbYkeSL._AC_UY580_.jpg' 
    },
    { 
      id: 5, 
      title: 'Reloj Digital', 
      price: 89.99,
      imageUrl: 'https://i.redd.it/9cikveqawsf61.jpg' 
    },
    { 
      id: 6, 
      title: 'Auriculares', 
      price: 29.99,
      imageUrl: 'https://i.pinimg.com/564x/9b/1b/27/9b1b27adb231dd1e70af496cd2b624c8.jpg' 
    },
    { 
      id: 7, 
      title: 'Cargador', 
      price: 14.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa402tIypnTRTm63QuLsa07Mwyj0W0pBpSDA&s' 
    },
    { 
      id: 8, 
      title: 'Tablet 10" HD', 
      price: 199.99,
      imageUrl: 'https://i.redd.it/fluff-cursed-ipad-mini-1-cellular-on-ios-6-1-3-v0-x49gtjiy5oz81.jpg?width=3024&format=pjpg&auto=webp&s=22f9ab7dc7e1d517adf5845c3557244b4605519e' 
    },
    { 
      id: 9, 
      title: 'iPhone X', 
      price: 699.99,
      imageUrl: 'https://preview.redd.it/6bhnyauqigo41.jpg?auto=webp&s=6a964f61ea87e668e25745cb6bf6fcaab237e118' 
    },
    { 
      id: 10, 
      title: 'Laptop Ultra Delgado', 
      price: 999.99,
      imageUrl: 'https://i.pinimg.com/originals/eb/53/b4/eb53b45c57e2659410e4d3b9f6ed52e3.png' 
    },
  ];

  constructor() {}

  /**
   * Obtiene todos los productos.
   * @returns Lista de productos (IBook[]).
   */
  getBooks(): IBook[] {
    return this.listaLibros; // Retorna la lista de productos.
  }

  /**
   * Busca un producto por su ID.
   * @param id Identificador del producto.
   * @returns Un producto (IBook) o 'undefined' si no existe.
   */
  getBookById(id: number): IBook | undefined {
    // Itera por la lista de productos y compara el ID.
    return this.listaLibros.find(product => product.id === id); // Retorna el producto si lo encuentra.
  }
}