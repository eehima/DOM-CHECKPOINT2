//  selecting element by id
const colorBoxElem = document.getElementById('color-box');
const changeColorBtn = document.getElementById('change-color-btn');

// to create a hexadecimal color changer

function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}

changeColorBtn.addEventListener('click', () => {
    colorBoxElem.style.backgroundColor = randomColor();

    console.log(randomColor());
});























