import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJeuxComponent } from './add-jeux.component';

describe('AddJeuxComponent', () => {
  let component: AddJeuxComponent;
  let fixture: ComponentFixture<AddJeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddJeuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
