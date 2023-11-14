const modal = document.getElementById('modal-overlay');
const openBtn = document.getElementById('modal-open-btn');
const closeBtn = document.getElementById('modal-close-btn');


// open modal
openBtn.addEventListener('click', function() {
        modal.classList.remove('d-none');
        openBtn.classList.add('d-none');
});


// close modal
closeBtn.addEventListener('click', function() {
        modal.classList.add('d-none');
        openBtn.classList.remove('d-none');
});



// version with if statement

// openBtn.addEventListener('click', function() {
//     if (modal.classList.contains('d-none')) {
//         modal.classList.remove('d-none');
//         openBtn.classList.add('d-none');
//     }
// });


// closeBtn.addEventListener('click', function() {
//     if (!modal.classList.contains('d-none')) {
//         modal.classList.add('d-none');
//         openBtn.classList.remove('d-none');
//     }
// });