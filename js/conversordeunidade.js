
let resp 
let qtd = document.getElementById("qtd")
let value1 = document.querySelector("#prodSelect").value
let value2 = document.querySelector("#prodSelect2").value

if  ( value1 === metro && value2 === quilometro) {
        resp=qtd/100
}
else if ( value1===metro && value2===centimetro) {
          resp=qtd*100
}
 else if ( value1===metro && value2===milimetro) {
          resp=qtd*1000  
 }
else if ( value1===centimetro && value2===metro) {
            resp=qtd/100
}
 else if ( value1===centimetro && value2===quilometro){ 
            resp=qtd/1000
          }
 else if ( value1===centimetro && value2===milimetro) {
            resp=qtd*10
 }
 else if ( value1===quilometro && value2===metro){ 
            resp=qtd*1000000
 }
 else if ( value1===quilometro && value2===centimetro) {
            resp=qtd*100000
 }
else if ( value1===quilometro && value2===milimetro){ 
            resp=qtd*1000000
}

 else if ( value1===milimetro && value2===quilometro) {
            resp=qtd/1000000
 }
 else if ( value1===milimetro && value2===centimetro) {
            resp=qtd/10
 }
  else if ( value1===milimetro && value2===metro){ 
            resp=qtd/1000
  }

            else{ resp="nao selecionou nenhum"
            }
               
console.log(`voce selecionou ${resp}`);


            
            


            
            
  
