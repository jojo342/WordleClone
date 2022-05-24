/*
  Sets up the global variables to use in-game and picks a random word from the array WORDS as the right guess for the round. 
  
  Also logs the right guess to the console
*/
import { WORDS } from "./words.js";

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)
