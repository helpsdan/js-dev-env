import './index.css'
import numeral from 'numeral';

const courseValue = numeral(1000).format('R$0,00');
console.log(`Eu gostaria de pagar ${courseValue} para fazer esse curso.`)
