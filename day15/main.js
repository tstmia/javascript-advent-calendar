const directionBtn = {
    previous: -1,
    next: 1
}

const changeCard = (btn) => {

    const cards = document.getElementsByClassName('card');
    const currentCard = document.getElementsByClassName('current-card');
    const currentIndex = [].slice.call(cards).indexOf(currentCard[0]);
    const maxIndex = cards.length - 1;
    let nextIndex = currentIndex + btn;

    const windowWidth = window.innerWidth;
    const cardWidth = windowWidth * 0.5;

    const images = document.getElementsByClassName('images')

    if (nextIndex < 0) {
        nextIndex = 3;
    } else if (nextIndex > maxIndex) {
        nextIndex = 0;
    }

    cards[currentIndex].classList.remove('current-card');
    cards[nextIndex].classList.add('current-card');

    images[0].style.transform = `translateX(${ cardWidth * nextIndex * -1}px)` ;
};

const previousBtn = document.getElementsByClassName('previous');
const nextBtn  = document.getElementsByClassName('next');

previousBtn[0].addEventListener('click', () => changeCard(directionBtn.previous));
nextBtn[0].addEventListener('click', () => changeCard(directionBtn.next));
