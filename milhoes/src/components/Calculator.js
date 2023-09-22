import React, { useState } from 'react';
import './css/styles.css'

function Calculator() {
  const [milhas, setMilhas] = useState(1000);
  const [precoPorMilheiro, setPrecoPorMilheiro] = useState(70);
  const [valorBonus, setValorBonus] = useState(200);
  const [valorDesconto, setValorDesconto] = useState(40);

  // Função para calcular o preço total
  const calcularPrecoTotal = () => {
    const milhasNumerico = parseFloat(milhas);
    const calcularBonus = (milhasNumerico * (valorBonus / 100));
    const milhasTotais = milhasNumerico + calcularBonus;
    const precoPorMilhasComDesconto = (precoPorMilheiro - (precoPorMilheiro * (valorDesconto/100)));
    const precoTotal = precoPorMilhasComDesconto / (milhasTotais/1000) //(milhasTotais * precoPorMilhasComDesconto);
    return precoTotal;
  };

  // Função para renderização condicional
  const renderizarResultado = () => {
    const precoTotal = calcularPrecoTotal();
    if (precoTotal < 15) {
      return <p>O preço por 1000 milhas é menor que R$ 15, sendo R$ {precoTotal.toFixed(2)}.</p>;
    } else {
      return (
        <p>
          O preço por 1000 milhas é: R$ {precoTotal.toFixed(2)}
        </p>
      );
    }
  };

  return (
    <div class='geral'>
      <h2>Calculadora de Milhas</h2>
      <div class='infos'>
        <label>
          Quantas milhas você deseja comprar:
          <br/>
          <br/>
          <input
            type="number"
            value={milhas}
            onChange={(e) => setMilhas(e.target.value)}
          />
        </label>
      </div>
      
      <br />

      <div class='infos'>
        <label>
          Quantidade de Bonus (%):
          <br/>
          <br/>
          <input
          type="number"
          value={valorBonus}
          onChange={(e) => setValorBonus(e.target.value)}
          />
        </label>
      </div>
      
      <br />
      <div class='infos'>
        <label>
          Preço atual de 1000 milhas (R$):
          <br/>
          <br/>
          <input
            type="number"
            value={precoPorMilheiro}
            onChange={(e) => setPrecoPorMilheiro(e.target.value)}
          />
        </label>
      </div>
      <br/>
      <div class='infos'>
        <label>
          Valor de desconto (%):
          <br/>
          <br/>
          <input
          type="number"
          value={valorDesconto}
          onChange={(e) => setValorDesconto(e.target.value)}
          />
        </label>
      </div>
      {renderizarResultado()}
    </div>
  );
}

export default Calculator;
