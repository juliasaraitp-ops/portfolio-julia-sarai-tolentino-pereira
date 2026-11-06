function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
        document.getElementById("resultado").innerHTML = "Preencha peso e altura com valores válidos!";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";
    let cor = "";

    if (imc < 18.5){
        classificacao = "Baixo Peso";
        cor = "#3b82c4";
    }else if (imc < 25){ 
        classificacao = "Peso Normal";
        cor = "#3a9d6e";
    }else if (imc < 30){
        classificacao = "Sobrepeso";
        cor = "#e08a1e";
    }else if (imc < 35){
        classificacao = "Obesidade grau I";
        cor = "#e0644a";
    }else if (imc < 40){
        classificacao = "Obesidade grau II";
        cor = "#d03f3f";
    }else{
        classificacao = "Obesidade grau III (mórbida)";
        cor = "#9b1c31";
    }

    document.getElementById("resultado").innerHTML = "<h2 class='valor-imc'>Seu IMC é: " + imc.toFixed(1) + "</h2>" + "<span class='classificacao' style='color: " + cor + "'>" + classificacao + "</span>"; 
}