import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasVindaComponent } from './boas-vinda.component';

describe('BoasVindaComponent', () => {
  let component: BoasVindaComponent;
  let fixture: ComponentFixture<BoasVindaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoasVindaComponent]
    });
    fixture = TestBed.createComponent(BoasVindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
