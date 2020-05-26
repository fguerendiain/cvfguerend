import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAvatarComponent } from './owner-avatar.component';

describe('OwnerAvatarComponent', () => {
  let component: OwnerAvatarComponent;
  let fixture: ComponentFixture<OwnerAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
