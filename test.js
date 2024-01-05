import Blockchain from './classes/Blockchain.js';
import { ledgerBasic } from './ledger.js';

const RetaChain = new Blockchain();



RetaChain.createNewBlock('0x3423', '0x32423'); //establish a made up block


//fill block with transactions from ledger
for(let tx in ledgerBasic){
  RetaChain.createNewTransaction(ledgerBasic[tx].amount, ledgerBasic[tx].sender, ledgerBasic[tx].receiver);
}

//
RetaChain.createNewBlock('0x4343', 'ox9843');

console.log(RetaChain)