import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCompComponent } from './ad-comp.component';

describe('AdCompComponent', () => {
  let component: AdCompComponent;
  let fixture: ComponentFixture<AdCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
