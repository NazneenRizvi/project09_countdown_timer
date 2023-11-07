import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
function countdownTimer(totalSeconds) {
    let remainingTime = totalSeconds;
    const timer = setInterval(function () {
        if (remainingTime <= 0) {
            clearInterval(timer);
            console.log('Timer has expired');
            rl.close();
        }
        else {
            const formattedTime = formatTime(remainingTime);
            console.log(formattedTime);
            remainingTime -= 1;
        }
    }, 1000);
}
rl.question('Please enter the amount of seconds: ', (input) => {
    const totalSeconds = parseInt(input);
    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        console.log('Please enter a valid positive number of seconds.');
        rl.close();
    }
    else {
        countdownTimer(totalSeconds);
    }
});
rl.on('close', () => {
    process.exit(0);
});
