var peça = prompt("Insira o nome da peça");
var peso = prompt("Insira o peso da peça em gramas");
let caixa = ["Tampa do motor", "Estator bobinado",+peça];
let nomet = peça.length;
  if (peso > 100) {
   if (caixa.length < 10) {
     if (nomet > 3) {console.log("Cadastro concluido");
        
     } else {console.log("ERRO");
        
     }
    
   } else {console.log("A caixa não tem capacidade suficiente.");
    
   }     

    
 } else {console.log("Cadastro não pode ser feito.");
    
 }
 //Se for usado no navegador, pode ser trocado console.log por alert 