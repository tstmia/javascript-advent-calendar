
const tagetNumber = Math.floor(Math.random() * 101);
console.log('tagetNumber', tagetNumber);
const startTime = new Date().getTime();

const getElapsedTime = () => {
    const now = new Date().getTime();
    const elapsedTime = Math.floor((now - startTime) / 100);
    console.log('elapsedTime', elapsedTime);

    const diff = Math.abs(tagetNumber - elapsedTime);
    console.log('diff', diff);
    if (diff > 0) {
        console.log(`Oh no, you lose! Off by ${diff}`);
    } else if (diff === 0) {
        console.log('you win!!!');
    }
}


const counts = setInterval(getElapsedTime, 100);

// clearInterval(counts);
