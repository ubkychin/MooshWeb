import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersbootstrapComponent } from './usersbootstrap.component';

describe('UsersbootstrapComponent', () => {
  let component: UsersbootstrapComponent;
  let fixture: ComponentFixture<UsersbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
