import React from "react";

const EtapaUm = () => {
  
    return (
    <div>
        <h1>Etapa 1 - Dados Gerais</h1>
        <p>1. Qual seu nome? </p><input  placeholder='Digite seu nome completo'/>
        <p>2. Qual a sua idade?</p><input  placeholder='Digite sua idade'/>
        <p>3. Email </p><input type='email'  placeholder='Digite seu email'/>
        <p>4. Qual sua escolaridade:</p>
            <select>
                <option value="mIncompleto">Ensino médio incompleto</option>
                <option value="mCompleto">Ensino médio completo</option>
                <option value="sIncompleto">Superior incompleto</option>
                <option value="sCompleto">Superior completo</option>
            </select>
    </div>
    )
}

export {EtapaUm} 