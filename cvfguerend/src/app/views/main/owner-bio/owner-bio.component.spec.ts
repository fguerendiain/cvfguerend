import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerBioComponent } from './owner-bio.component';

describe('OwnerBioComponent', () => {
  let component: OwnerBioComponent;
  let fixture: ComponentFixture<OwnerBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
