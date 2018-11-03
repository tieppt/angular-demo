import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPrjComponent } from './content-prj.component';

describe('ContentPrjComponent', () => {
  let component: ContentPrjComponent;
  let fixture: ComponentFixture<ContentPrjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPrjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
