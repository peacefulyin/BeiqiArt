import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosMasterComponent } from './videos-master.component';

describe('VideosMasterComponent', () => {
  let component: VideosMasterComponent;
  let fixture: ComponentFixture<VideosMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
