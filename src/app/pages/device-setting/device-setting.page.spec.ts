import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceSettingPage } from './device-setting.page';

describe('DeviceSettingPage', () => {
  let component: DeviceSettingPage;
  let fixture: ComponentFixture<DeviceSettingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
