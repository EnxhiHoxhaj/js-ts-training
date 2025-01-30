function popup(){
    alert ('You have Click a button!')
}
const btn = document.querySelectorAll('.btt-es');
btn.forEach(function(item){
    item.addEventListener('click', popup)
})
