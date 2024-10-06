import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateGoalPageRoutingModule } from './update-goal-routing.module';

import { UpdateGoalPage } from './update-goal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateGoalPageRoutingModule
  ],
  declarations: [UpdateGoalPage]
})
export class UpdateGoalPageModule {}
