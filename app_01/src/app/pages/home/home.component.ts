import { Component } from '@angular/core';
import * as datoData from '../../../../public/json/datoData.json';
import { Imagenes } from '../../../utils/productos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  logo: string[] = ['assets/logo.png'];
  imagenes: Imagenes[] = (datoData as any).default;
  productos: Imagenes[] = (datoData as any).default;

  constructor() {}
}
