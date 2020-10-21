import { Direction } from "../enums/Direction";
import { IMazeGameFactory } from "../interfaces/IMazeGameFactory";

export function startGame(mazeGame: IMazeGameFactory) {

    console.log("\n\n\t createMazeGoodpractice \n");

    const { makeMaze, makeRoom, makeWall, makeDoor } = mazeGame
    
    const myMaze = makeMaze()

    const r1 = makeRoom(1);
    const r2 = makeRoom(2);
    const myDoor = makeDoor(r1, r2);

    myMaze.addRoom(r1);
    myMaze.addRoom(r2);

    r1.setSide(Direction.Up, makeWall());
    r1.setSide(Direction.Right, myDoor);
    r1.setSide(Direction.Down, makeWall());
    r1.setSide(Direction.Left, makeWall());

    r2.setSide(Direction.Up, makeWall());
    r2.setSide(Direction.Right, makeWall());
    r2.setSide(Direction.Down, makeWall());
    r2.setSide(Direction.Left, myDoor);

    console.log("Sides of room r1: ", r1.sides);
    console.log("Sides of room r2: ", r2.sides);

    return myMaze;

}