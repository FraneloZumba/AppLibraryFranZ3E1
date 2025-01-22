import { RouterModule, Router } from '@angular/router'; // Asegúrate de importar Router
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonicModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  item = { id: 1 }; // Asegúrate de tener un objeto 'item' con un id

  constructor(private route: Router) {} // Inyectar Router en el constructor

  navigateToCart() {
    this.route.navigate(['/cart']);
  }
}
