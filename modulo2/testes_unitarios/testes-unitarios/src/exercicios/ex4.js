export function crescenteArray(array) {
    const ordenarArray = array.sort((a, b) => a - b)  
    return ordenarArray
  }

  export function decrescenteArray(array) {
    const ordenarArray = array.sort((a, b) => b - a)  
    return ordenarArray
  }