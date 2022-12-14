import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDatailsComponent } from './cards-datails.component';

describe('CardsDatailsComponent', () => {
  let component: CardsDatailsComponent;
  let fixture: ComponentFixture<CardsDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
