import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunCardComponent } from './albun-card.component';

describe('AlbunCardComponent', () => {
  let component: AlbunCardComponent;
  let fixture: ComponentFixture<AlbunCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbunCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
