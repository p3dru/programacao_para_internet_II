import React from 'react';

function Result({ precoTotal }) {
  return (
    <div>
      {precoTotal < 15 ? (
        <p>O preço por 1000 milhas é menor que R$ 15.</p>
      ) : (
        <p>
          O preço por 1000 milhas é: R$ {precoTotal.toFixed(2)}
        </p>
      )}
    </div>
  );
}

export default Result;
