import React, { useState } from 'react';
import './css/styles.css'
import InputMilhas from './inputs/InputMilhas';
import InputBonus from './inputs/InputBonus';
import InputPrecoPorMilheiro from './inputs/InputPrecoPorMilheiro';
import InputValorDesconto from './inputs/InputValorDesconto';
import Result from './Result';

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
    //const precoTotal = calcularPrecoTotal();
    /*
    if (precoTotal < 15) {
      return (
        
      )
    } else if (20 > precoTotal > 15){
      return (
        
      );
    } else if (precoTotal > 20){
      return(
        
      );
    }
    */
  };

  return (
    <div class='geral'>
      <h2>Calculadora de Milhas</h2>
      <InputMilhas value={milhas} onChange={setMilhas}/>
      <br />

      <InputBonus value={valorBonus} onChange={setValorBonus}/>
      <br />

      <InputPrecoPorMilheiro value={precoPorMilheiro} onChange={setPrecoPorMilheiro}/>
      <br/>

      <InputValorDesconto value={valorDesconto} onChange={setValorDesconto}/>
      <br/>

      <Result precoTotal={calcularPrecoTotal()}/>
      {renderizarResultado()}
    </div>
  );
}


export default Calculator;