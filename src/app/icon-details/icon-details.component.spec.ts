import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDetailsComponent } from './icon-details.component';

describe('IconDetailsComponent', () => {
  let component: IconDetailsComponent;
  let fixture: ComponentFixture<IconDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
