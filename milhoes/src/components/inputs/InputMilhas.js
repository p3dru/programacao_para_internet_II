import React from "react";

function InputMilhas({value, onChange}){
    return(
        <div class='infos'>
            <label>
            Quantas milhas você deseja comprar:
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

export default InputMilhas;