function myBlog(){
  window.location.href = "/blog.html";
}
  
document.getElementById('Donation')
.addEventListener('click', function(){

  const Donation=document.getElementById('Donation-card')
  const history=document.getElementById('History-Card')
  Donation.classList.remove('hidden');
  history.classList.add('hidden');

  
})


document.getElementById('History')
.addEventListener('click', function(){

  const Donation=document.getElementById('Donation-card')
  const history=document.getElementById('History-Card')
  Donation.classList.add('hidden');
  history.classList.remove('hidden');

//   let InputMoneyHistory=document.getElementById('Input-Money').value
// console.log('Donate for Flood at Noakhali, Bangladesh', InputMoneyHistory);

  
})

function myhtml(){
  window.location.href = "/index.html";
}


// first card

document.getElementById('donate-btn')
.addEventListener('click', function(event){
event.preventDefault();

const InputMoney=document.getElementById('Input-Money').value
const TextMoney=document.getElementById('Text-Money').innerText
const MainBlance=document.getElementById('Main-Blance').innerText

const input_Money=parseFloat(InputMoney);
const text_Money=parseFloat(TextMoney);
const Main_Blance=parseFloat(MainBlance);

const NewMoney=input_Money+text_Money
const MainNewBlance= Main_Blance-input_Money

document.getElementById('Text-Money').innerText=NewMoney;
document.getElementById('Main-Blance').innerText=MainNewBlance;


})

// Second Card

document.getElementById('donate-btn2')
.addEventListener('click', function(event){
event.preventDefault();

const InputMoney=document.getElementById('Input-Money2').value
const TextMoney=document.getElementById('Text-Money2').innerText
const MainBlance=document.getElementById('Main-Blance').innerText

const input__Money=parseFloat(InputMoney);
const text__Money=parseFloat(TextMoney);
const Main_Blance=parseFloat(MainBlance);

const NewMoney=input__Money+text__Money
const MainNewBlance= Main_Blance-NewMoney

document.getElementById('Text-Money2').innerText=NewMoney;
document.getElementById('Main-Blance').innerText=MainNewBlance;


})

// third Card

document.getElementById('donate-btn3')
.addEventListener('click', function(event){
event.preventDefault();

const InputMoney=document.getElementById('Input-Money3').value
const TextMoney=document.getElementById('Text-Money3').innerText
const MainBlance=document.getElementById('Main-Blance').innerText

const input___Money=parseFloat(InputMoney);
const text___Money=parseFloat(TextMoney);
const Main_Blance=parseFloat(MainBlance);

const NewMoney=input___Money+text___Money
const MainNewBlance= Main_Blance-NewMoney

document.getElementById('Text-Money3').innerText=NewMoney;
document.getElementById('Main-Blance').innerText=MainNewBlance;


})

