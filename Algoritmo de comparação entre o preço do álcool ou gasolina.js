var contador = prompt ('Digite 1 para iniciar o programa e 2 para encerrar.')

while (contador == 1 )
{
  // Solicitação dos dados de entrada
  var a = prompt ('Digite o preço da gasolina:');
  var b = prompt ('Digite preço do álcool:');

    //Conversão de texto para número
    
    var numeroA = parseFloat (a)
    var numeroB = parseFloat (b)


    //Armazenamento da divisão A por B 
    
  var numeroC = numeroA / numeroB
    if (numeroC > 0.7)
     { alert ('Vale mais a pena gasolina')};
    if (numeroC < 0.7)
      { alert ('Vale mais a pena o álcool')};
    if (numeroC == 0.7)
      { alert ('Faça o que seu coração mandar')};
      
      contador = prompt ('Digite 1 para iniciar o programa e 2 para encerrar.')
}