import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoFields, Producto } from '../../../models/Producto.model';
import { ProductosCreateComponent } from '../productos-create/productos-create.component';
import { ProductosDeleteComponent } from '../productos-delete/productos-delete.component';

@Component({
  selector: 'app-productos-table',
  templateUrl: './productos-table.component.html',
  styleUrls: ['./productos-table.component.css']
})
export class ProductosTableComponent implements OnInit, AfterViewInit  {

  productos: Producto[] = [];

  columnsDef: string[] = ['nombre', 'precio', 'formato', 'marca', 'accion']
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource<Producto>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(ProductosCreateComponent) productosCreateComponent!: ProductosCreateComponent;

  constructor(
    private snackBar: MatSnackBar,
    private readonly productosService: ProductosService,
    private dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.getProductos();
  }

  ngAfterViewInit() {
    this.initTable();
  }

  getProductos() {
    this.productos =  this.productosService.getProductos();
    this.dataSource.data = this.productos;
  }

  initTable() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  refreshDataTable() {
    this.getProductos();
    this.initTable();
  }

  createProducto() {
    const dialogRef = this.dialog.open(ProductosCreateComponent, {
      width: '720px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.refreshDataTable();
        this.snackBar.open('Producto añadido', '', {
          horizontalPosition: 'left',
          duration: 5000,
          verticalPosition: 'bottom',
        });
      }
    });
  }

  deleteProducto(id: number) {
    const dialogRef = this.dialog.open(ProductosDeleteComponent, {
      width: '320px',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.productosService.deleteProducto(id);
        this.refreshDataTable();
        this.snackBar.open('Producto eliminado', '', {
          horizontalPosition: 'left',
          duration: 5000,
          verticalPosition: 'bottom',
        });
      }
    });
  }

}
