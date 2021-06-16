import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuebookComponent } from './issuebook.component';

describe('IssuebookComponent', () => {
  let component: IssuebookComponent;
  let fixture: ComponentFixture<IssuebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
