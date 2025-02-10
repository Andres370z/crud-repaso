import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutHomeComponent } from './fut-home.component';

describe('FutHomeComponent', () => {
  let component: FutHomeComponent;
  let fixture: ComponentFixture<FutHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
