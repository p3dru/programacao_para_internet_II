import React from 'react';

function Result({ precoTotal }) {
  let mensagem = '';
  /*
  if(precoTotal < 15){
    //mensagem = 'O preco por milheiro é menor que R$15,00'
  } else if (precoTotal > 20){
    //mensagem = "O preço complicado de se arcar."
  }
  */


  return (
    <div>
      {mensagem && <p>{mensagem}</p>}

      {precoTotal <= 15 && (
        <div class="bom-negocio">
          É um ótimo negócio! Cada milheiro sairá por R${precoTotal.toFixed(2)}
        </div>
        //<p>O preço por 1000 milhas é menor que R$ 15.</p>
      )}

      {precoTotal > 15 && precoTotal < 20 && (
        <div class="meh-negocio">
          Talvez devesse esperar! Cada milheiro sairá por R${precoTotal.toFixed(2)}
        </div>
      )}

      {precoTotal >= 20 && (
        <div class="ruim-negocio">
          Fuja! Cada milheiro sairá por R${precoTotal.toFixed(2)}
        </div>
      )}
    </div>
  );
}


export default Result;
