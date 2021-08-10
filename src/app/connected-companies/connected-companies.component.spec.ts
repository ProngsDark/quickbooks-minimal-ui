import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedCompaniesComponent } from './connected-companies.component';

describe('ConnectedCompaniesComponent', () => {
  let component: ConnectedCompaniesComponent;
  let fixture: ComponentFixture<ConnectedCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
