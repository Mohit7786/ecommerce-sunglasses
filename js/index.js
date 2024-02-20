let searchBtn = document.querySelector('.search');
let searchBar = document.querySelector('.search-bar-container');
let sub = document.querySelector('#sub');
let add = document.querySelector('#add');
let value = document.querySelector('#value');
let price = document.querySelector('#price');

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

let count = 0

add.addEventListener('click', () => {
    console.log("button clicked" + count);
    count++;
    value.innerHTML = count;
})

sub.addEventListener('click', () => {
    console.log("button clicked" + count);
    count--;
    value.innerHTML = count;
})

