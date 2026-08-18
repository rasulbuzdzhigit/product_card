const productCard = document.querySelector('.product-card');
const changeColorCardButton = document.querySelector('#change-card-color-button');

  changeColorCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = 'blue';
})

const productCardList = document.querySelectorAll('.product-card');
const changeColorCardListButton = document.querySelector('#change-all-card-color-button');

  changeColorCardListButton.addEventListener('click', () => {
  productCardList.forEach((card) => card.style.backgroundColor = 'red');
})

const openGoogleButton = document.querySelector('#open-google-button')

openGoogleButton.addEventListener('click', openGoogle) 

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыйть Googgle.com');
  
  if (answer === true) {
    window.open('https://google.com')
  } else{
    return;
  }
}

const title = document.querySelector('.page__title');

title.addEventListener('mouseenter', () => {
  console.log(title.textContent);
})

const outputConsolLog = document.querySelector('#output-console-log-button');

outputConsolLog.addEventListener('click', () => {
  alert('дз №6');
  console.log('Вывод сообщения в консоль');
})


const colorButton = document.querySelector('#change-color-button');

  colorButton.classList.add('button-green');

  colorButton.addEventListener('click', () => {
    colorButton.classList.toggle('button-red');
})