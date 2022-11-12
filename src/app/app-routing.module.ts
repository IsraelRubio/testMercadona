import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosRoutingModule } from './components/productos/productos.routing';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductosCardComponent } from './components/productos/productos-card/productos-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/card', pathMatch: 'full' },
  { path: '**', component: ProductosCardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    ProductosRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
