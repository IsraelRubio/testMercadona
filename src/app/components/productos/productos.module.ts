import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProductosCardComponent } from './productos-card/productos-card.component';
import { ProductosTableComponent } from './productos-table/productos-table.component';
import { ProductosComponent } from './productos.component';
import { ProductosCreateComponent } from './productos-create/productos-create.component';
import { ProductosDeleteComponent } from './productos-delete/productos-delete.component';

@NgModule({
  declarations: [
    ProductosTableComponent,
    ProductosCardComponent,
    ProductosComponent,
    ProductosCreateComponent,
    ProductosDeleteComponent
  ],
  exports: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatTooltipModule,
    MatSortModule,
    MatSnackBarModule
  ]
})
export class ProductosModule { }
