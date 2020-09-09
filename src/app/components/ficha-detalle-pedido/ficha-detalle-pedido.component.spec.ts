import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDetallePedidoComponent } from './ficha-detalle-pedido.component';

describe('FichaDetallePedidoComponent', () => {
  let component: FichaDetallePedidoComponent;
  let fixture: ComponentFixture<FichaDetallePedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaDetallePedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaDetallePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
