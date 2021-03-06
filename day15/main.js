const directionBtn = {
    previous: -1,
    next: 1
}

const changeCard = (btn) => {

    const cards = document.getElementsByClassName('card');
    const currentCard = document.getElementsByClassName('current-card');
    const currentIndex = [].slice.call(cards).indexOf(currentCard[0]);
    const maxIndex = cards.length - 1;

    let index = currentIndex + btn;
    if (index < 0) {
        index = maxIndex;
    } else if (index > maxIndex) {
        index = 0;
    }

    cards[currentIndex].classList.remove('current-card');
    cards[index].classList.add('current-card');

}

const previousBtn = document.getElementsByClassName('previous');
const nextBtn  = document.getElementsByClassName('next');

previousBtn[0].addEventListener('click', () => changeCard(directionBtn.previous));
nextBtn[0].addEventListener('click', () => changeCard(directionBtn.next));
