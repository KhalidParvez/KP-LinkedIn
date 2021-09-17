import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinilinkedinComponent } from './minilinkedin.component';

describe('MinilinkedinComponent', () => {
  let component: MinilinkedinComponent;
  let fixture: ComponentFixture<MinilinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinilinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinilinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
