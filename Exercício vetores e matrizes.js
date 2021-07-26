var matrizA = [[],[],[]];

var matrizB = [[],[],[]];


for (var i = 0; i < 3; i++) {

  for (var j = 0; j < 3; j++) {

    matrizA[i][j] = parseInt(prompt("Digite um número: "));

  }

}


for (var i = 0; i < 3; i++) {

  for (var j = 0; j < 3; j++) {

   matrizB[i][j] = matrizA[j][i];

  }

}


alert(matrizA);

alert(matrizB);