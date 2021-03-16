// html要素取得
const targetNumberEle = document.getElementsByClassName('target-number');
const elapsedTimeEle = document.getElementsByClassName('elapsed-time');
const resultEle = document.getElementsByClassName('result');
const startButtonEle = document.getElementsByClassName('start-button');
const stopButtonEle = document.getElementsByClassName('stop-button');

window.onload = () => {
    const tagetNumber = Math.floor(Math.random() * 101);
    targetNumberEle[0].innerHTML = tagetNumber;
}

startButtonEle[0].addEventListener('click', () => {
    startButtonEle[0].classList.add('non-display');
    stopButtonEle[0].classList.remove('non-display');

    const startTime = new Date().getTime();
    const getElapsedTime = () => {
        const now = new Date().getTime();
        const elapsedTime = Math.floor((now - startTime) / 100);
        elapsedTimeEle[0].innerHTML = elapsedTime;
    }
    const counts = setInterval(getElapsedTime, 100);

    stopButtonEle[0].addEventListener('click', () => {
        clearInterval(counts);
        getDiff();
    })
})

const getDiff = () => {
    const tagetNumber = document.getElementsByClassName('target-number')[0].textContent;
    const elapsedTime = document.getElementsByClassName('elapsed-time')[0].textContent;

    const diff = Math.abs(tagetNumber - elapsedTime);
    if (diff > 0) {
        resultEle[0].innerHTML = `Oh no, you lose! Off by ${diff}`;
        resultEle[0].classList.add('lose');
    } else if (diff === 0) {
        resultEle[0].innerHTML = 'you win!!!';
        resultEle[0].classList.add('win');
    }
}
