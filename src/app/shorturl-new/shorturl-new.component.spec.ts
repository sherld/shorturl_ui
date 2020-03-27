import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorturlNewComponent } from './shorturl-new.component';

describe('ShorturlNewComponent', () => {
  let component: ShorturlNewComponent;
  let fixture: ComponentFixture<ShorturlNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorturlNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorturlNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
