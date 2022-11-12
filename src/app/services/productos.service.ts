import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto.model';
import { productos } from './data';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  setProducto(producto : Producto) {
    productos.push(producto)
  }

  getProductos() {
    return productos;
  }

  deleteProducto(id: number) {
    productos.splice(id, 1);
  }
}
