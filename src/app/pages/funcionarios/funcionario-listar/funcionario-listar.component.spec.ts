import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FuncionarioListarComponent } from './funcionario-listar.component';
import { FuncionarioService } from 'src/app/services/funcionario.service';

describe('FuncionarioListarComponent', () => {
  let component: FuncionarioListarComponent;
  let fixture: ComponentFixture<FuncionarioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [FuncionarioListarComponent],
      providers: [FuncionarioService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
