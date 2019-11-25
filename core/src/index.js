import './index.css'
import numeral from 'numeral';

/* eslint-disable no-console */

const courseValue = numeral(1000).format('R$0,00');
console.log(`Eu gostaria de pagar ${courseValue} para fazer esse curso.`)
