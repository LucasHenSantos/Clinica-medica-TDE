import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAdicionarComponent } from './paciente-adicionar.component';

describe('PacienteAdicionarComponent', () => {
  let component: PacienteAdicionarComponent;
  let fixture: ComponentFixture<PacienteAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteAdicionarComponent]
    });
    fixture = TestBed.createComponent(PacienteAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
