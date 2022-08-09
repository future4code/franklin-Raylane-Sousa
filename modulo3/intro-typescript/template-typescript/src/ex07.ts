export function converterRnaDna(baseDna: string):void {
        let formaRna: string;
        formaRna = baseDna.replace(/A/g, "U").replace(/T/g, "A").replace(/T/g, "A");
        console.log(baseDna)
        console.log(formaRna)
}

console.log(converterRnaDna('ATT GCT GCG CAT TAA CGA CGC GTA'))