import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto.model';
import { productos } from '../../../services/data';

@Component({
  selector: 'app-productos-card',
  templateUrl: './productos-card.component.html',
  styleUrls: ['./productos-card.component.css']
})
export class ProductosCardComponent implements OnInit {

  productos: Producto[] = productos

  constructor() { }

  ngOnInit(): void {
  }

}
