import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowyoursComponent } from './showyours.component';

describe('ShowyoursComponent', () => {
  let component: ShowyoursComponent;
  let fixture: ComponentFixture<ShowyoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowyoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowyoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
