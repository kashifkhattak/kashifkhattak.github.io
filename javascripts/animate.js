document.addEventListener('DOMContentLoaded',init);
const txtElement = document.querySelector('.txt');
const words = JSON.parse(txtElement.getAttribute('data-words'));
var index = 0;
var text = ''

function init(){
    if (index < words[0].length){
        txtElement.innerHTML += words[0].charAt(index);
        index ++;
        setTimeout(init,75);
    }

}
