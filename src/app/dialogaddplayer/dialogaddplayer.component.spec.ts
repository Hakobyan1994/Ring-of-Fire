import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogaddplayerComponent } from './dialogaddplayer.component';

describe('DialogaddplayerComponent', () => {
  let component: DialogaddplayerComponent;
  let fixture: ComponentFixture<DialogaddplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogaddplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogaddplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
