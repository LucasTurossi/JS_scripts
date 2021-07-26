function gerarSaudacaoSimples( ){

    alert ('Olá, pessoal!')
  
  }
  
  function gerarSaudacaoComSW (nome, periodo){
  
    switch (periodo){
  
      case 'manha':
        alert ('Bom dia ' + nome)
  
      case 'tarde':
        alert ('Boa tarde ' + nome)
  
      case 'noite':
        alert ('Boa noite ' + nome)
      
      default:
        alert ('Período incorreto')
  
    }
  
  
  }
  
  
  function gerarSaudacao(nome, periodo){
  
    if (periodo == 'manha'){
  
  
      alert ('Bom dia ' + nome)
  
    }
    
  
    else if (periodo == 'tarde'){
    
  
    alert ('Boa tarde ' + nome)
  
    }
  
  
    else if (periodo == 'noite'){
  
      alert ('Boa noite ' + nome)
  
  
    }
  
    else{
  
      alert ('Período incorreto')
  
    }
  
  
  }
  
  
  gerarSaudacaoSimples ( )
  
  gerarSaudacao ( "Lucas", "manha")
  gerarSaudacao ("Stefane", "tarde")
  gerarSaudacao ("Matheus", "noite")
  
  
  gerarSaudacaoComSW ( 'Pedro', 'manha')
  