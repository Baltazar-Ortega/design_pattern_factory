import { IMapSite } from "./IMapSite";
import { IRoom } from "./IRoom";

export interface IMaze extends IMapSite {
    addRoom(room: IRoom): void;
    getRoomNumber(room: IRoom): void;
}