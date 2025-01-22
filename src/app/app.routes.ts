import { Routes } from '@angular/router';

// Definimos las rutas de la aplicación
export const routes: Routes = [
  // Ruta raíz: Carga el componente BooksListComponent
  {
    path: '',
    loadComponent: () => import('./Views/book-list/book-list.component').then(m => m.BooksListComponent),
  },
  // Ruta para detalles del libro: Carga el componente BookDetailComponent
  {
    path: 'books/:id',
    loadComponent: () => import('./Views/book-details/book-details.component').then(m => m.BookDetailComponent),
  },
  // Ruta para página no encontrada: Carga el componente NotFoundComponent
  {
    path: 'not-found/:id',
    loadComponent: () => import('./Views/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
  // Ruta comodín: Redirige cualquier URL no definida a la página principal
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },

  {
    path: 'cart',
    loadComponent: () => import('./Views/cart/cart.component').then((m) => m.CartComponent),
  },
];