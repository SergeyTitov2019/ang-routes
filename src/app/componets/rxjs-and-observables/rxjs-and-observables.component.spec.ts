import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAndObservablesComponent } from './rxjs-and-observables.component';

describe('RxjsAndObservablesComponent', () => {
  let component: RxjsAndObservablesComponent;
  let fixture: ComponentFixture<RxjsAndObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsAndObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsAndObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
