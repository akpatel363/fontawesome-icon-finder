import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiDetailsComponent } from './mi-details.component';

describe('MiDetailsComponent', () => {
  let component: MiDetailsComponent;
  let fixture: ComponentFixture<MiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
