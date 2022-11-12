import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductosCardComponent } from './productos-card/productos-card.component';
import { ProductosTableComponent } from './productos-table/productos-table.component';
import { ProductosComponent } from './productos.component';


const routes: Routes = [
  {
    path: 'card', component: ProductosComponent,
    children: [
      { path: '', component: ProductosCardComponent },
      { path: 'productos', component: ProductosTableComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule {}
