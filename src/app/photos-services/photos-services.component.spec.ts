import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosServicesComponent } from './photos-services.component';

describe('PhotosServicesComponent', () => {
  let component: PhotosServicesComponent;
  let fixture: ComponentFixture<PhotosServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
