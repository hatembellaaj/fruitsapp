import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFruitComponent } from './add-fruit.component';

describe('AddFruitComponent', () => {
  let component: AddFruitComponent;
  let fixture: ComponentFixture<AddFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFruitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
