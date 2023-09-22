import React from "react";

function InputBonus({value, onChange}){
    return(
        <div class='infos'>
            <label>
                Quantidade de Bonus (%):
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

export default InputBonus;