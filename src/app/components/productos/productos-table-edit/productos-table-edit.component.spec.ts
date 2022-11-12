import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTableEditComponent } from './productos-table-edit.component';

describe('ProductosTableEditComponent', () => {
  let component: ProductosTableEditComponent;
  let fixture: ComponentFixture<ProductosTableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosTableEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosTableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
