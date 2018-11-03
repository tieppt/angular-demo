import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBlockComponent } from './color-block.component';

describe('ColorBlockComponent', () => {
  let component: ColorBlockComponent;
  let fixture: ComponentFixture<ColorBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
