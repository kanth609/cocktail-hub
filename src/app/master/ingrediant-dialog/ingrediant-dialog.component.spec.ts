import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantDialogComponent } from './ingrediant-dialog.component';

describe('IngrediantDialogComponent', () => {
  let component: IngrediantDialogComponent;
  let fixture: ComponentFixture<IngrediantDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngrediantDialogComponent]
    });
    fixture = TestBed.createComponent(IngrediantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
