import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhTuoiComponent } from './tinh-tuoi.component';

describe('TinhTuoiComponent', () => {
  let component: TinhTuoiComponent;
  let fixture: ComponentFixture<TinhTuoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinhTuoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhTuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
