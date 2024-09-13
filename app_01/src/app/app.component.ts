import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NabvarComponent } from './pages/nabvar/nabvar.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NabvarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'actividadDocente';
}
