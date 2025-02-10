import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutCartInfoComponent } from './fut-cart-info.component';

describe('FutCartInfoComponent', () => {
  let component: FutCartInfoComponent;
  let fixture: ComponentFixture<FutCartInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutCartInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutCartInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
