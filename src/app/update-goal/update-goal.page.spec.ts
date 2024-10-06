import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateGoalPage } from './update-goal.page';

describe('UpdateGoalPage', () => {
  let component: UpdateGoalPage;
  let fixture: ComponentFixture<UpdateGoalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
