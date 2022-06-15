const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () =>{
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.procent'),
      lines = document.querySelectorAll('.scale div');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});