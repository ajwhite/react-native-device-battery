var {NativeModules} = require('react-native');
var {DeviceBattery} = NativeModules;

const batteryEventEmitter = new NativeEventEmitter(DeviceBattery);

export default {
  isCharging: DeviceBattery.isCharging,
  getBatteryLevel: DeviceBattery.getBatteryLevel,
  addListener: callback => batteryEventEmitter.addListener('batteryChanged', callback)
  removeListener: (listener) => {
    // DeviceEventEmitter.removeListener('batteryChange', listener);
  }
};
