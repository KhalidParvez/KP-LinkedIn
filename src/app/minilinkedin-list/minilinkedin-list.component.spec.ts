import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinilinkedinListComponent } from './minilinkedin-list.component';

describe('MinilinkedinListComponent', () => {
  let component: MinilinkedinListComponent;
  let fixture: ComponentFixture<MinilinkedinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinilinkedinListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinilinkedinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
