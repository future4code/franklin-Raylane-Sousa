export function stringReverse(word: string): void {
    let a = word.split('')
    let b = a.reverse()
    let c = b.join('')
    console.log(c)
}

console.log(stringReverse('palavra'))