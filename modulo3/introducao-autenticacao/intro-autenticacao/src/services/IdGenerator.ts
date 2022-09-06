import {v4} from "uuid"

// Exemplo 1

// Crie um método generateId, 
// que retorne um identificador no padrão UUID

// Para guardar o arquivo que contém essa função, 
// crie uma pasta própria dentro da src/

export class IdGenerator {
    generateId = () => {
        return v4();
    }
} 