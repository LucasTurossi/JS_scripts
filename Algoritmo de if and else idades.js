var idade = parseInt (prompt ("Digite a sua idade"))

if (idade > 0) {

  if (idade >= 60){

    alert("Você é um idoso")

  }

  else if (( idade >= 18) && (idade <60)){

    alert ("Você é um adulto")

}

  else {
      alert ("Você é jovem ainda")

}
}
else {alert (" Idade inválida")}
