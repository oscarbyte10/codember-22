import { answer as answer1 } from "./challenge01/index.ts";
import { answer as answer2 } from "./challenge02/index.ts";

answer1.then((value) => console.log("Challenge 01:", value));
answer2.then((value) => console.log("Challenge 02:", value));
