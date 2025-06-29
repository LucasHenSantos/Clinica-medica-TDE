import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeListarComponent } from './especialidade-listar.component';

describe('EspecialidadeListarComponent', () => {
  let component: EspecialidadeListarComponent;
  let fixture: ComponentFixture<EspecialidadeListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadeListarComponent]
    });
    fixture = TestBed.createComponent(EspecialidadeListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
