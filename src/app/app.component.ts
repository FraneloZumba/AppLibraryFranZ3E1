import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de marcarlo como standalone
  imports: [RouterOutlet, IonicModule], // Importa tanto RouterOutlet como IonicModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
}
