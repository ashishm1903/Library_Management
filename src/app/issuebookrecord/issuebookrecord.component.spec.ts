import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuebookrecordComponent } from './issuebookrecord.component';

describe('IssuebookrecordComponent', () => {
  let component: IssuebookrecordComponent;
  let fixture: ComponentFixture<IssuebookrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuebookrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuebookrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
