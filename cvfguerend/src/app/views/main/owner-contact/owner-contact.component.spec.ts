import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerContactComponent } from './owner-contact.component';

describe('OwnerContactComponent', () => {
  let component: OwnerContactComponent;
  let fixture: ComponentFixture<OwnerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
