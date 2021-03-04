
let reslutEle = document.getElementById('reslut');
let btnEle = document.getElementById('button');


btnEle.addEventListener('click', () => {
    let childrenEle = document.getElementById('inputChildren');
    let children = parseInt(childrenEle.value);

    let candyEle = document.getElementById('inputCandy');
    let candy = parseInt(candyEle.value);

    if (isNaN(children) || isNaN(candy) ) {
        return reslutEle.innerText = '子供の人数とキャンディーの数の値が正しくありません';
    }

    // Math.floor() 関数は与えられた数値以下の最大の整数を返す
    const candyPerChild = Math.floor(candy/children);
    const maxCandy = children * candyPerChild;

    const resultText = `${children}人の子供たちは、一人${candyPerChild}個、\n全員で合計${maxCandy}個のキャンディを食べることができます。`
    reslutEle.innerText = resultText;

});

