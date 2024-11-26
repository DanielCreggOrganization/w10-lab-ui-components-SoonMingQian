import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SongDetailsModalComponent } from './song-details-modal.component';

describe('SongDetailsModalComponent', () => {
  let component: SongDetailsModalComponent;
  let fixture: ComponentFixture<SongDetailsModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SongDetailsModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SongDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
