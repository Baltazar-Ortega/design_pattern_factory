import { IDoor } from "../../interfaces/IDoor";
import { IRoom } from "../../interfaces/IRoom";


export class Door implements IDoor {
    room1: IRoom;
    room2: IRoom;
    isOpen: boolean;
    constructor(room1: IRoom, room2: IRoom) {
        this.room1 = room1;
        this.room2 = room2;
        this.isOpen = false;
    }
}