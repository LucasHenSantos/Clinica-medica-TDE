import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioListarComponent } from './convenio-listar.component';

describe('ConvenioListarComponent', () => {
  let component: ConvenioListarComponent;
  let fixture: ComponentFixture<ConvenioListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvenioListarComponent]
    });
    fixture = TestBed.createComponent(ConvenioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
