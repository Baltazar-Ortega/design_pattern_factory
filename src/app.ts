import { DefaultMazeGameFactory } from "./factories/Default/DefaultMazeGameFactory";
import { EnchantedMazeGameFactory } from "./factories/Enchanted/EnchantedMazeGameFactory"

import { startGameBadPractice } from "./main/badPractice";
import { startGame } from "./main/goodPractice";


const defaultMazeGame = new DefaultMazeGameFactory()
startGame(defaultMazeGame)

const enchantedMazeGame = new EnchantedMazeGameFactory()
startGame(enchantedMazeGame)


startGameBadPractice()