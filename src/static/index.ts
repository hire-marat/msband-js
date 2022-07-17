import { parse } from 'uuid';

// APP JS
export const APP_ID_JS = parse("98024c7c-2018-4ba1-b4a1-2835a821b25c");

// BLE
export const MICROSOFT: BluetoothServiceUUID = "0000feb2-0000-1000-8000-00805f9b34fb";

// ZIPPY
export const ZIPPY_SERVICE: BluetoothServiceUUID = "a502ca98-2ba5-413c-a4e0-13804e47b38f";

// TX
export const ZIPPY_R1: BluetoothCharacteristicUUID = "0534594a-a8e7-4b1a-a6b1-cd5243059a55";  // notify
export const ZIPPY_R2: BluetoothCharacteristicUUID = "0434594a-a8e7-4b1a-a6b1-cd5243059a54";  // notify
export const ZIPPY_R_CONTROL: BluetoothCharacteristicUUID = "af04c4b2-892b-43be-b69c-5d13f2195391";  // write, notify
export const ZIPPY_R_BUFFER: BluetoothCharacteristicUUID = "8004c4b2-892b-43be-b69c-5d13f2195380";  // write

// RX
export const ZIPPY_W1: BluetoothCharacteristicUUID = "0734594a-a8e7-4b1a-a6b1-cd5243059a57";  // write
export const ZIPPY_W2: BluetoothCharacteristicUUID = "0634594a-a8e7-4b1a-a6b1-cd5243059a56";  // write
export const ZIPPY_W_CONTROL: BluetoothCharacteristicUUID = "ae04c4b2-892b-43be-b69c-5d13f2195390";  // write, notify
export const ZIPPY_W_BUFFER: BluetoothCharacteristicUUID = "7f04c4b2-892b-43be-b69c-5d13f2195379";  // read, notify

// OTHER
export const ZIPPY_MAX_ALIGNED: BluetoothCharacteristicUUID = "4204c4b2-892b-43be-b69c-5d13f2195359";  // read, notify
export const ZIPPY_ERROR: BluetoothCharacteristicUUID = "d2a1e333-c56c-445c-a24d-4a4440c676f6";  // read, notify
export const ZIPPY_LOCK: BluetoothCharacteristicUUID = "2f8784ec-6a34-11b6-634d-b7369dce1c55";  // write, read, notify


// PUSH
export const PUSH2_SERVICE: BluetoothServiceUUID = "0BAD7FCC-2EE4-F1AC-439F-D7B2BA250294";
export const PUSH2_CHARACTERISTIC: BluetoothCharacteristicUUID = "80B22CC2-8C79-CAA6-B341-3D0675F9859F";  // notify


export const PUSH_SERVICE: BluetoothServiceUUID = "C742E1A3-6320-5ABC-9643-D206C677E580";
