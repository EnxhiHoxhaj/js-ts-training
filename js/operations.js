
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let form = e.target; 
    let inputone = document.getElementById('inputone').value;
    let inputtwo = document.getElementById('inputtwo').value;
    inputone= parseInt(inputone);
    inputtwo= parseInt(inputtwo);
    let risultato = inputone + inputtwo;
    console.log(inputone, inputtwo, risultato);
    document.getElementById('result').textContent = `Risultato: ${inputone} + ${inputtwo} = ${risultato}`
    form.reset();
})