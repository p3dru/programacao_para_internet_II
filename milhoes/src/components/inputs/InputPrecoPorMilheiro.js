import React from "react";

function InputPrecoPorMilheiro({value, onChange}){
    return (
        <div class='infos'>
            <label>
            Preço atual de 1000 milhas (R$):
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

export default InputPrecoPorMilheiro;