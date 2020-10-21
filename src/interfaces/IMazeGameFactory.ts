import { IDoor } from "./IDoor";
import { IMaze } from "./IMaze";
import { IRoom } from "./IRoom";
import { IWall } from "./IWall";

export interface IMazeGameFactory {
    makeMaze(): IMaze;
    makeRoom(n: Number): IRoom;
    makeWall(): IWall; 
    makeDoor(r1: IRoom, r2: IRoom): IDoor;
}