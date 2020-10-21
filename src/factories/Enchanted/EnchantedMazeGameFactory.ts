import { IMazeGameFactory } from "../../interfaces/IMazeGameFactory";

import { IDoor } from "../../interfaces/IDoor";
import { IMaze } from "../../interfaces/IMaze";
import { IRoom } from "../../interfaces/IRoom";
import { IWall } from "../../interfaces/IWall";

import { EnchantedMaze } from "../../elements/Enchanted/EnchantedMaze";
import { EnchantedRoom } from "../../elements/Enchanted/EnchantedRoom";
import { EnchantedWall } from "../../elements/Enchanted/EnchantedWall";
import { EnchantedDoor } from "../../elements/Enchanted/EnchantedDoor";


export class EnchantedMazeGameFactory implements IMazeGameFactory {
    makeMaze(): IMaze {
        return new EnchantedMaze();
    }

    makeRoom(n: Number): IRoom {
        return new EnchantedRoom(n);
    }
    
    makeWall(): IWall {
        return new EnchantedWall();
    }

    makeDoor(r1: IRoom, r2: IRoom): IDoor {
        return new EnchantedDoor(r1, r2);
    }
}