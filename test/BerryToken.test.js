const { assert } = require("chai");

const BerryToken = artifacts.require('BerryToken')

let balance; 

contract("BerryToken", (accounts) => {
  
  before(async () => {
    berryToken = await BerryToken.deployed();
  })


it("gives the owner of the token 1M token", async () => {
 let balance = await berryToken.balanceOf(accounts[0])  
balance = web3.utils.fromWei(balance, 'ether')
assert.equal(balance, "1000000", "Balance should be 1M tokens for the contract creator")
})


it("can transfer tokens between accounts", async () => {
  let amount = web3.utils.toWei('10000', 'ether')
  await berryToken.transfer(accounts[1], amount, { from: accounts[0] })

  let balance = await berryToken.balanceOf(accounts[1])
  balance = web3.utils.fromWei(balance, 'ether')
  assert.equal(balance, "10000", "Balance should be 10k tokens for the contract creator")
})

it("should give account[1] authority to spend account[0]'s balance", async () =>{

  await berryToken.approve(accounts[1], 1000);

  let amount = web3.utils.toWei('10000', 'ether')
  assert.equal(balance, "should be 9k tokens for contract creator"  )
})


})
  
 



 

    

  

  