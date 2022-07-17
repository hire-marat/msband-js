import {parse} from "uuid"
import {APP_ID_JS} from "../static";
import {U8s, U32, Struct} from "construct-js";

export function buildLockPacket(acquire: boolean = false, AppUUID: string|ArrayLike<number> = APP_ID_JS) {
    if (AppUUID instanceof String){
        AppUUID = parse(AppUUID);
    }
    if (!(AppUUID instanceof Uint8Array)) {
        throw new Error("Bad result from AppUUID parsing")
    }

    return Struct("LockPacket")
        .field("AppUUID", U8s(AppUUID))
        .field("Flag", U32(Number(acquire))).toUint8Array();

}