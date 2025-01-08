import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLibraryFranZ3E1Component } from './app-library-fran-z3-e1.component';

describe('AppLibraryFranZ3E1Component', () => {
  let component: AppLibraryFranZ3E1Component;
  let fixture: ComponentFixture<AppLibraryFranZ3E1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLibraryFranZ3E1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLibraryFranZ3E1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
