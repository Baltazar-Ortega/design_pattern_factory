import { Direction } from "../enums/Direction";

import { Door } from "../elements/Default/Door";
import { Maze } from "../elements/Default/Maze";
import { Room } from "../elements/Default/Room";
import { Wall } from "../elements/Default/Wall";

export function startGameBadPractice() {
  console.log("\n\n\t createMazeBadpractice \n");

  const myMaze = new Maze();

  const r1 = new Room(1);
  const r2 = new Room(2);
  const myDoor = new Door(r1, r2);

  myMaze.addRoom(r1);
  myMaze.addRoom(r2);

  r1.setSide(Direction.Up, new Wall());
  r1.setSide(Direction.Right, myDoor);
  r1.setSide(Direction.Down, new Wall());
  r1.setSide(Direction.Left, new Wall());

  r2.setSide(Direction.Up, new Wall());
  r2.setSide(Direction.Right, new Wall());
  r2.setSide(Direction.Down, new Wall());
  r2.setSide(Direction.Left, myDoor);

  console.log("Sides of room r1: ", r1.sides);
  console.log("Sides of room r2: ", r2.sides);

  return myMaze;
}
