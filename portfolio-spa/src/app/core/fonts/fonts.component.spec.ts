import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsComponent } from './fonts.component';

describe('FontsComponent', () => {
  let component: FontsComponent;
  let fixture: ComponentFixture<FontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
