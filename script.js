function definir(){
    let valorSigno = Number(document.getElementById("signo").value);
    let valorTimeFutebol = Number(document.getElementById("time").value);
    let qtdeSoft = Number(document.querySelectorAll('input[id="soft"]:checked').length);
    let valorEscolaridade = Number(document.querySelector('input[id="escolaridade"]:checked').value);

    let valorSoft= qtdeSoft * 10;

    let resultado = valorSigno + valorTimeFutebol + valorSoft + valorEscolaridade;
   
    if (resultado >= 1000) {
        document.getElementById("resultado").value = ("Parabéns! Sua pontuação é de " + resultado + " pts. Seu Salário será de R$3500,00");
     } 
     else{
        document.getElementById("resultado").value = ("Parabéns! Sua pontuação é de " + resultado + " pts. Seu Salário será de R$2000,00");
     }
}
