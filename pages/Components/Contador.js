import React, { useState } from "react";

export default function CapsLook(props) {
    const [contador, setContador] = useState(1)

    

    function adicionarContador() {
        setContador(contador + 1)
    }
    

    return(
        <div>
           <div>{contador}</div> 
            <button onClick={adicionarContador}>Adicionar</button>
            <hr />
        </div>
    )
}