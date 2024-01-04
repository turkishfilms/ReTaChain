/**
 @class
 @param

 * **/
class Block{
constructor({previousHash,transactions = [],date}={}){
		this.previousHash = previousHash
		this.transactions = transactions
		this.date = date
		this.chainHash = hash(previousHash,transactions, date)
		this.nonce = 0
}

}

