import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifServicesComponent } from './tarif-services.component';

describe('TarifServicesComponent', () => {
  let component: TarifServicesComponent;
  let fixture: ComponentFixture<TarifServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
