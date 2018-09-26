let curencyValue = document.getElementsByClassName('currency-type')[0].getElementsByClassName('value');

for (let i = 0; i < curencyValue.length; i++) {
  let value = parseInt(curencyValue[i].innerHTML);
  
  value > 0 ? curencyValue[i].style.color = '#578940' : curencyValue[i].style.color = '#761113'
}

