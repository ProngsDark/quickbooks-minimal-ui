import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRetrievalButtonComponent } from './data-retrieval-button.component';

describe('DataRetrievalButtonComponent', () => {
  let component: DataRetrievalButtonComponent;
  let fixture: ComponentFixture<DataRetrievalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataRetrievalButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRetrievalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
