import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceSettingPageRoutingModule } from './device-setting-routing.module';

import { DeviceSettingPage } from './device-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceSettingPageRoutingModule
  ],
  declarations: [DeviceSettingPage]
})
export class DeviceSettingPageModule {}
