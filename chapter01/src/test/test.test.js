import { statement } from './../statement.js'
import { plays } from './plays.js'
import { invoices } from './invoices.js'

console.log(statement(invoices[0], plays));
