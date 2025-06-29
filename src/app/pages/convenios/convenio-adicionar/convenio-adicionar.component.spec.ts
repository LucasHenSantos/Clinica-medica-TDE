import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioAdicionarComponent } from './convenio-adicionar.component';

describe('ConvenioAdicionarComponent', () => {
  let component: ConvenioAdicionarComponent;
  let fixture: ComponentFixture<ConvenioAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvenioAdicionarComponent]
    });
    fixture = TestBed.createComponent(ConvenioAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
