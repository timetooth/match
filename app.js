const cardarray = [
  {
    name:'fries',
    img:'fries.png'
  },
  {
    name:'fries',
    img:'fries.png'
  },
  {
    name:'hotdog',
    img:'hotdog.png'
  },
  {
    name:'hotdog',
    img:'hotdog.png'
  },
  {
    name:'pizza',
    img:'pizza.png'
  },
  {
    name:'pizza',
    img:'pizza.png'
  },
  {
    name:'icecream',
    img:'ice-cream.png'
  },
  {
    name:'icecream',
    img:'ice-cream.png'
  },
  {
    name:'burger',
    img:'cheeseburger.png'
  },
  {
    name:'burger',
    img:'cheeseburger.png'
  },
  {
    name:'shake',
    img:'milkshake.png'
  },
  {
    name:'shake',
    img:'milkshake.png'
  }
]
cardarray.sort(()=>0.5-Math.random())

const gridDisplay = document.querySelector('#grid')

let cardsChosen=[]
let cardsChosenIds=[]
const cardsWon=[]
let resultDisplay=document.querySelector('#result')
let po=document.querySelector('#point')

function createBoard(){
  for(i=0;i<cardarray.length;i++){
    const card = document.createElement('img') 
    // console.log(card,i)
    card.setAttribute('src' , 'blank.png')
    card.setAttribute('data-id' , i)
    // this is equivalent to writting html code of <img src="blank.png" data-id="i">
    console.log(card)
    card.style.margin="10px";
    card.style.height="200px";
    card.style.width="200px";
    card.addEventListener('click' , flipcard)
    gridDisplay.appendChild(card)
  }
}

let up = document.querySelector("#update")

function update(){
  up.textContent = ''
}
function poi(){
  po.textContent = ''
}

function checkMatch(){
  const cards = document.querySelectorAll('img')
  console.log('check for match')
  
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  

  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'blank.png')
    cards[optionTwoId].setAttribute('src', 'blank.png')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    up.textContent = 'you found a match!'
    setTimeout(update , 1000)
    po.textContent = '+1'
    setTimeout(poi , 1000)
    cards[optionOneId].setAttribute('src', 'cat.png')
    cards[optionTwoId].setAttribute('src', 'cat.png')
    cards[optionOneId].removeEventListener('click', flipcard)
    cards[optionTwoId].removeEventListener('click', flipcard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'blank.png')
    cards[optionTwoId].setAttribute('src', 'blank.png')
    
  }
  if  (cardsWon.length === cardarray.length/2) {
  resultDisplay.textContent = cardsWon.length
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
  cardsChosen = []
  cardsChosenIds = []
  
  resultDisplay.textContent = cardsWon.length
  
  cardsChosen=[]
  cardsChosenIds=[]
}

function flipcard(){
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardarray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardarray[cardId].img)
  if (cardsChosen.length===2){
    
    setTimeout(checkMatch,200) //when we want to call a function after a specific amount of time has passed
    // used as  setTimeout(name of function to be called , time in milliseconds after which function is to be called)
  }
  
}
createBoard()
