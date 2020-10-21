import { IMazeGameFactory } from "../../interfaces/IMazeGameFactory";
import { IDoor } from "../../interfaces/IDoor";
import { IMaze } from "../../interfaces/IMaze";
import { IRoom } from "../../interfaces/IRoom";
import { IWall } from "../../interfaces/IWall";

import { Maze } from "../../elements/Default/Maze";
import { Room } from "../../elements/Default/Room";
import { Wall } from "../../elements/Default/Wall";
import { Door } from "../../elements/Default/Door";

export class DefaultMazeGameFactory implements IMazeGameFactory {
    makeMaze(): IMaze {
        return new Maze();
    }

    makeRoom(n: Number): IRoom {
        return new Room(n);
    }
    
    makeWall(): IWall {
        return new Wall();
    }

    makeDoor(r1: IRoom, r2: IRoom): IDoor {
        return new Door(r1, r2);
    }
}