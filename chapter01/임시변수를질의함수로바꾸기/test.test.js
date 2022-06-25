import { statement } from './statement.js'
import { plays } from '../src/plays.js'
import { invoices } from '../src/invoices.js'

console.log(statement(invoices[0], plays));
