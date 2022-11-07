var qtde_abacate = parseInt(ptompt("Quantos abacates?")); 

if(qtde_abacate >= 12){ 
    valor_total = qtde_abacate * 4; 
}else{ 
    valor_total = qrde_abacate * 5; 
} 

alert("R$ " +valor_total.toFixed(2)); 
