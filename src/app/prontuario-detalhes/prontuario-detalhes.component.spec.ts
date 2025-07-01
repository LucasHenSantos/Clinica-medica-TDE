import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioDetalhesComponent } from './prontuario-detalhes.component';

describe('ProntuarioDetalhesComponent', () => {
  let component: ProntuarioDetalhesComponent;
  let fixture: ComponentFixture<ProntuarioDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioDetalhesComponent]
    });
    fixture = TestBed.createComponent(ProntuarioDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
