import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResusableButtonsComponent } from './resusable-buttons.component';

describe('ResusableButtonsComponent', () => {
  let component: ResusableButtonsComponent;
  let fixture: ComponentFixture<ResusableButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResusableButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResusableButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
