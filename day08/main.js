/**
 * 1~６のランダムの数字を返す
 */
const rollingDice = () => {
    // Math.random(); は０<１までの小数による乱数を生成

    // 0 <= ｎ の範囲のランダム値：Math.random() * (n + 1);
    // m <= n の範囲のランダム値：Math.random() * ((n + 1) - m) + m;

    const nowFace = document.querySelectorAll('.display');
    nowFace[0].classList.remove('display');
    nowFace[0].classList.add('display-none');

    const dice = Math.floor(Math.random() * 6) + 1;
    const faceNumber = document.querySelectorAll(`.number-${dice}`);
    faceNumber[0].classList.remove('display-none');
    faceNumber[0].classList.add('display');
    
}

const button = document.querySelectorAll('.dice');
button[0].addEventListener('click', () => { rollingDice() });


