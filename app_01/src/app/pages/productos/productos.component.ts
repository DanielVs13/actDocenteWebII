import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Adidas Predator', imagen: 'assets/productos/product3.jpg' },
    
  ];

  constructor(private router: Router) {}

  navigateToProduct(productId: number) {
    this.router.navigate(['/producto', productId]);
  }
}
