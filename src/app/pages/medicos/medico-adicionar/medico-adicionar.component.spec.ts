import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoAdicionarComponent } from './medico-adicionar.component';

describe('MedicoAdicionarComponent', () => {
  let component: MedicoAdicionarComponent;
  let fixture: ComponentFixture<MedicoAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoAdicionarComponent]
    });
    fixture = TestBed.createComponent(MedicoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
