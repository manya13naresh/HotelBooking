import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddlocationComponent } from './adminaddlocation.component';

describe('AdminaddlocationComponent', () => {
  let component: AdminaddlocationComponent;
  let fixture: ComponentFixture<AdminaddlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddlocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
