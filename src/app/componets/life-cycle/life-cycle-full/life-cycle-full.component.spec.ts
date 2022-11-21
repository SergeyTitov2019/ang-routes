import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleFullComponent } from './life-cycle-full.component';

describe('LifeCycleFullComponent', () => {
  let component: LifeCycleFullComponent;
  let fixture: ComponentFixture<LifeCycleFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
