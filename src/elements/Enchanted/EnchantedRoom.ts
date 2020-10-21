import { Direction } from "../../enums/Direction";
import { IMapSite } from "../../interfaces/IMapSite";
import { IRoom } from "../../interfaces/IRoom";

export class EnchantedRoom implements IRoom {
    roomNumber: Number;
    sides: Array<IMapSite> = new Array<IMapSite>(4);

    constructor(roomNumber: Number) {
        this.roomNumber = roomNumber
    }

    setSide(direction: Direction, mapSite: IMapSite) {
        switch(direction) {
            case Direction.Up:
                this.sides.splice(0, 1, mapSite);
                break;
            case Direction.Right:
                this.sides.splice(1, 1, mapSite);
                break;
            case Direction.Down:
                this.sides.splice(2, 1, mapSite);
                break;
            case Direction.Left:
                this.sides.splice(3, 1, mapSite);
                break;
            default:
                console.log("Error al introducir mapSite");
                break;
         }
    }
}