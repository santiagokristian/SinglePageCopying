import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavenHeaderComponent } from './haven-header.component';

describe('HavenHeaderComponent', () => {
  let component: HavenHeaderComponent;
  let fixture: ComponentFixture<HavenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HavenHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HavenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
