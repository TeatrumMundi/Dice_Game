export const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
};

export const startDiceRoll = (setDiceNumber, setIsRolling, onRollComplete) => {
    setIsRolling(true);

    let rollingInterval = setInterval(() => {
        setDiceNumber(getRandomNumber());
    }, 100);

    setTimeout(() => {
        clearInterval(rollingInterval);
        const finalNumber = getRandomNumber();
        setDiceNumber(finalNumber);
        setIsRolling(false);
        onRollComplete(finalNumber);
    }, 1000);
};

export const calculateStats = (rolls) => {
    if (rolls.length === 0) {
        return { total: 0, average: 0, min: 0, max: 0, bonus: 0 };
    }

    const total = rolls.reduce((sum, num) => sum + num, 0);
    const min = Math.min(...rolls);
    const max = Math.max(...rolls);
    const average = (total / rolls.length).toFixed(2);
    const bonus = rolls.filter(num => num > 4).length * 2;

    return { total, average, min, max, bonus };
};
