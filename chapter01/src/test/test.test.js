import { statement, htmlStatement } from './../statement.js'
import { plays } from './plays.js'
import { invoices } from './invoices.js'

console.log(statement(invoices[0], plays));
// console.log(htmlStatement(invoices[0], plays));
