import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeAdicionarComponent } from './especialidade-adicionar.component';

describe('EspecialidadeAdicionarComponent', () => {
  let component: EspecialidadeAdicionarComponent;
  let fixture: ComponentFixture<EspecialidadeAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadeAdicionarComponent]
    });
    fixture = TestBed.createComponent(EspecialidadeAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
