import React from "react";

const EtapaTres = (props) => {

    return (
    <div>
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <p>5. Por que você não terminou o curso Superior? </p><input placeholder='Informe o motivo'/>
        <p>6. Você fez algum curso complementar? </p>
        <select>
            <option>Curso técnico</option>
            <option>Cursos de inglês</option>
            <option>Não fiz curso complementar</option>
        </select>
        
    </div>
    )
}

export {EtapaTres} 