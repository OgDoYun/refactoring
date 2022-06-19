import { statement } from './statement.js'
import { plays } from '../src/plays.js'
import { invoices } from '../src/invoices.js'

console.log(`리팩터링의 첫단계`);
console.log(statement(invoices[0], plays));
