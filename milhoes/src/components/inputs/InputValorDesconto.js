import React from "react";

function InputValorDesconto({value, onChange}){
    return (
        <div class='infos'>
            <label>
            Valor de desconto (%):
            <br/>
            <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
            </label>
      </div>

    )
}

export default InputValorDesconto;