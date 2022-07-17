import {buildLockPacket} from "./zippy";
import {BandType} from '../static/constants';
import {MICROSOFT, ZIPPY_SERVICE, ZIPPY_LOCK} from "../static";

abstract class ProtocolInterface {
    band_type: BandType;
    device: any;

    constructor() {
        this.band_type = BandType.NULL;
    }

}

export class BLEv2Interface extends ProtocolInterface {
    device: BluetoothDevice | null;
    service: BluetoothRemoteGATTService | null;

    r1: BluetoothRemoteGATTCharacteristic | null = null;
    r2: BluetoothRemoteGATTCharacteristic | null = null;
    lock_char: BluetoothRemoteGATTCharacteristic | null = null;

    constructor() {
        super();
        this.device = null;
        this.service = null;
    }

    async acquire(){

        this.device = await (window.navigator as Navigator).bluetooth.requestDevice({
            filters: [{services: [MICROSOFT]}],
            optionalServices:[ZIPPY_SERVICE]
        })

        if (this.device.gatt === undefined) {
            throw new Error("GATT is undefined");
        }

        await this.device.gatt.connect();

        this.service = await this.device.gatt.getPrimaryService(ZIPPY_SERVICE);

        this.lock_char = await this.service.getCharacteristic(ZIPPY_LOCK);
        await this.lock_char.addEventListener("characteristicvaluechanged", window.console.log)

    }

    async lock(acquire: boolean = true, app_id: string|ArrayLike<number>) {
        if (this.lock_char === null) {
            throw new Error("Lock Characteristic is null")
        }

        await this.lock_char.writeValueWithResponse(buildLockPacket(acquire, app_id))
    }

}
