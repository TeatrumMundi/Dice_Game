import './App.css';
import { useState } from 'react';
import { startDiceRoll, calculateStats } from './diceHandler';

const diceImages = [
    require("./images/Dice1.png"),
    require("./images/Dice2.png"),
    require("./images/Dice3.png"),
    require("./images/Dice4.png"),
    require("./images/Dice5.png"),
    require("./images/Dice6.png")
];

function App() {
    const [diceNumber, setDiceNumber] = useState(1);
    const [isRolling, setIsRolling] = useState(false);
    const [rolls, setRolls] = useState([]);
    const maxRolls = 10;

    const rollDice = () => {
        if (isRolling || rolls.length >= maxRolls) return;

        startDiceRoll(setDiceNumber, setIsRolling, (finalNumber) => {
            setRolls(prevRolls => [...prevRolls, finalNumber]);
        });
    };

    const resetGame = () => {
        setRolls([]);
        setDiceNumber(1);
        setIsRolling(false);
    };

    const stats = calculateStats(rolls);
    const gameOver = rolls.length >= maxRolls;

    return (
        <div className="App">
            <center>
                <div className="progress-bar-animated mt-2">
                    <h1 className="mb-1">Dice Game 🎲</h1>
                    <p className="fw-bold">Roll {rolls.length}/{maxRolls}</p>
                </div>

                <div className='container'>
                    <img src={diceImages[diceNumber - 1]} alt={`Dice ${diceNumber}`} />
                </div>
                <div className="mt-1">
                    {!gameOver ? (
                        <>
                            <button
                                className="btn btn-primary btn-lg me-1"
                                onClick={rollDice}
                                disabled={isRolling || gameOver}
                            >
                                {isRolling ? "Rolling..." : "🎲 Roll the dice"}
                            </button>
                            <button
                                className="btn btn-danger btn-lg"
                                onClick={resetGame}
                                disabled={isRolling}
                            >
                                🔄 Reset
                            </button>
                        </>
                    ) : (
                        <button className="btn btn-success btn-lg" onClick={resetGame}>
                            🔄 New Game
                        </button>
                    )}
                </div>

                {/* Displaying statistics */}
                <div className="container d-flex justify-content-center">
                    <div className="mt-4 p-3 border rounded shadow-sm bg-dark col-md-6">
                        <h2 className="h4 text-light">📊 Statistics</h2>
                        <p className="text-light"><b>Roll history:</b> {rolls.join(', ') || "None"}</p>
                        <p className="text-light"><b>Total points:</b> {stats.total}</p>
                        <p className="text-light"><b>Average value:</b> {stats.average}</p>
                        <p className="text-light"><b>Minimum roll:</b> {stats.min}</p>
                        <p className="text-light"><b>Maximum roll:</b> {stats.max}</p>
                        <p className="text-success"><b>Bonus points:</b> +{stats.bonus}</p>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default App;
