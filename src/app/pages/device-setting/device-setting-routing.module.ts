import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceSettingPage } from './device-setting.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceSettingPageRoutingModule {}
