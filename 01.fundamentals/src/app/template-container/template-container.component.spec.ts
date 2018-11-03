import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContainerComponent } from './template-container.component';

describe('TemplateContainerComponent', () => {
  let component: TemplateContainerComponent;
  let fixture: ComponentFixture<TemplateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
