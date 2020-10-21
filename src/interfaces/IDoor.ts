import { IMapSite } from "./IMapSite";
import { IRoom } from "./IRoom";

export interface IDoor extends IMapSite {
    room1: IRoom;
    room2: IRoom;
    isOpen: boolean;
}