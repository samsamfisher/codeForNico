import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBisComponent } from './card-bis.component';

describe('CardBisComponent', () => {
  let component: CardBisComponent;
  let fixture: ComponentFixture<CardBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
