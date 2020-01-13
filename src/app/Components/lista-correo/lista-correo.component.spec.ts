import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorreoComponent } from './lista-correo.component';

describe('ListaCorreoComponent', () => {
  let component: ListaCorreoComponent;
  let fixture: ComponentFixture<ListaCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
