import { APP_ID_JS } from "./static";
import { BLEv2Interface } from "./protocol";
import {buildLockPacket} from "./protocol/zippy";

declare global {
    interface Window { msband: any; }
}

window.msband = {
    "BLEv2Interface": BLEv2Interface,
    "UUID": APP_ID_JS,
    "buildLockPacket": buildLockPacket,
};