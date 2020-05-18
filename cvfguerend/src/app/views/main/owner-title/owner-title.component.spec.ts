import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerTitleComponent } from './owner-title.component';

describe('OwnerTitleComponent', () => {
  let component: OwnerTitleComponent;
  let fixture: ComponentFixture<OwnerTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
