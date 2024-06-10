import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdviserComponent } from './main-adviser.component';

describe('MainAdviserComponent', () => {
  let component: MainAdviserComponent;
  let fixture: ComponentFixture<MainAdviserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainAdviserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAdviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
