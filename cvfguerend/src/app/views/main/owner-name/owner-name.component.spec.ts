import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerNameComponent } from './owner-name.component';

describe('OwnerNameComponent', () => {
  let component: OwnerNameComponent;
  let fixture: ComponentFixture<OwnerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
