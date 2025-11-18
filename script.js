const swapper = document.getElementById('image-swapper');

function swapImage() {
    swapper.classList.toggle('swapped');
}

swapper.addEventListener('click', swapImage);

swapper.addEventListener('touchstart', function() {
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }
});