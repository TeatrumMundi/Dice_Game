# Dice Game 🎲

This is a simple dice rolling game built with React. Players can roll a dice up to a maximum of 10 times, and the game tracks statistics such as total points, average value, minimum and maximum rolls, and bonus points.

## Features

- Roll a dice up to 10 times.
- Track the roll history and various statistics (Total points, Average value, Minimum and Maximum roll).
- Reset the game or start a new game.
- Display dice images based on the roll.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **CSS**: For styling the game.
- **JavaScript**: For game logic and functionality.

## Setup and Installation

To run this project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/dice-game.git
cd dice-game

### 2. Install dependencies:

npm install


### 3. Start the development server:

npm start

This will start the app at http://localhost:3000.

Usage
Click on the "🎲 Roll the dice" button to roll a dice.
A maximum of 10 rolls are allowed.
After the game is over, you can click on the "🔄 New Game" button to reset the game and start fresh.
The statistics panel will display the roll history, total points, average value, minimum and maximum rolls, and bonus points.
Game Logic
Each time a dice is rolled, a random number between 1 and 6 is generated.
The game tracks the roll history and computes basic statistics:
Total points: Sum of all dice rolls.
Average value: Average of all dice rolls.
Minimum roll: The lowest roll value.
Maximum roll: The highest roll value.
Bonus points: Calculated based on the rolls).
