/**
 * Global variables:
 * -> Counter
 * 
 * -> Html elements
 */

let counter = 0;

const count = document.getElementById('count');
const numberBgr = document.querySelector('.counter-bar');
const btns = document.querySelectorAll('.btn');


/**
 * Iterates over all 3 buttons
 * 1. Adds 'click - EventListener' to each button -> event-object as parameter, that contains infomation about 'click event'
 * 2. CSS classes of clicked button saved in 'currentBtnClasses'
 * 3. If statements to check css classes
 */
btns.forEach(function(btn) {
    btn.addEventListener('click', function(event){
        currentBtnClasses = event.currentTarget.classList;
        if (currentBtnClasses.contains('decrease')) {
            counter--;
        } else if (currentBtnClasses.contains('reset')) {
            counter = 0;
        } else if (currentBtnClasses.contains('increase')) {
            counter++;
        }
        
        count.textContent = counter;
        selectColor();
    })
});


/**
 * Checks the counter 
 * -> counter < 0: red background, counter = 0: black background, counter > 0: green background
 */

function selectColor() {
    if (counter < 0) {
        numberBgr.style.backgroundColor = '#cd0000';
    } else if (counter === 0) {
        numberBgr.style.backgroundColor = '#000';
    } else if (counter > 0) {
        numberBgr.style.backgroundColor = '#03ba00';
    }
};



/*
btns.forEach(function(btn) {
    btn.addEventListener('click', function(event){
        currentBtnClasses = event.currentTarget.classList;
        if (currentBtnClasses.contains('decrease')) {
            counter--;
        } else if (currentBtnClasses.contains('reset')) {
            counter = 0;
        } else if (currentBtnClasses.contains('increase')) {
            counter++;
        }

        if (counter < 0) {
            numberBgr.style.backgroundColor = '#cd0000';
        } else if (counter === 0) {
            numberBgr.style.backgroundColor = '#000';
        } else if (counter > 0) {
            numberBgr.style.backgroundColor = '#03ba00';
        }

        count.textContent = counter;
        selectColor();
    })
});

*/