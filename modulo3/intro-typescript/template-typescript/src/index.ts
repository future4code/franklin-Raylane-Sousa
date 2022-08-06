import {checaTriangulo} from './ex01'
import {imprimeTresCoresFavoritas} from './ex02'
import { checaAnoBissexto } from './ex03';
import { comparaDoisNumeros } from './ex04';
import { checaRenovacaoRG } from './ex05';
import { PrintValues } from './ex06';
import { converterRnaDna } from './ex07';
import { stringReverse } from './ex08';

function Start() {
  checaTriangulo(3, 4, 5)
  imprimeTresCoresFavoritas("azul", "preto", "branco")
  checaAnoBissexto(2001)
  comparaDoisNumeros(3, 7)
  checaRenovacaoRG(2022, 1994, 1994)
  PrintValues(10, 6)
  converterRnaDna('ATT GCT GCG CAT TAA CGA CGC GTA')
  stringReverse('palavra')
}
console.log(Start)