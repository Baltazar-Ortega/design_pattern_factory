import { Direction } from "../enums/Direction";
import { IMapSite } from "./IMapSite";

export interface IRoom extends IMapSite {
    roomNumber: Number;
    sides: Array<IMapSite>[4];
    setSide(direction: Direction, mapSite: IMapSite): void;
}