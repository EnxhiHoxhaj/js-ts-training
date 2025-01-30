const numero = 30;
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let input = document.getElementById('input').value;
    input= parseInt(input);
    let risultato = numero + input;
    console.log(numero, input, risultato);
})