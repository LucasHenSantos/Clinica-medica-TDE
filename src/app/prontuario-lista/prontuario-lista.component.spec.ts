import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioListaComponent } from './prontuario-lista.component';

describe('ProntuarioListaComponent', () => {
  let component: ProntuarioListaComponent;
  let fixture: ComponentFixture<ProntuarioListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioListaComponent]
    });
    fixture = TestBed.createComponent(ProntuarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
