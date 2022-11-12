import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { formatos } from 'src/app/services/data';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../../models/Producto.model';

@Component({
  selector: 'app-productos-create',
  templateUrl: './productos-create.component.html',
  styleUrls: ['./productos-create.component.css']
})
export class ProductosCreateComponent {

  public form: FormGroup;
  public formatos: string[] = formatos;

  constructor(
    private fb: FormBuilder,
    private productosService: ProductosService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      formato: ['', Validators.required],
      marca: ['', Validators.required],
    });
    this.form.get('precio')?.valueChanges.subscribe( value => {
      if(value < 0) this.form.get('precio')?.setValue(0);
    })
  }

  addProduct() {
    const producto: Producto = this.form.value;
    this.productosService.setProducto(producto)
  }
}
