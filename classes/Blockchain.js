/**
 @class
 @param

 * **/

class Blockchain {
  constructor() {
    this.chain = [];
    this.newTransactions = [];
  }
}

Blockchain.prototype.createNewBlock = (previousBlockHash, hash) => {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce: 0, //fill in once proof of... is established
    hash: hash,
    previousBlockHash: previousBlockHash,
  };

  	this.newTransactions = [];
	this.chain.push(newBlock);

	return newBlock;
};

/* PREVIOUS CODE

class Block{
constructor({previousHash,transactions = [],date}={}){
		this.previousHash = previousHash
		this.transactions = transactions
		this.date = date
		this.chainHash = hash(previousHash,transactions, date)
		this.nonce = 0
}

}

*/
