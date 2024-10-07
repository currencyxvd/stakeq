const Staking = artifacts.require("Staking");

contract('Staking', accounts => {
    it("should stake ether", async () => {
        let instance = await Staking.deployed();
        let balanceBefore = await web3.eth.getBalance(accounts[0]);

        await instance.stake({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
        let balanceAfter = await web3.eth.getBalance(accounts[0]);

        assert(balanceBefore > balanceAfter, "Balance should decrease after staking");
    });

    it("should unstake ether with rewards", async () => {
        let instance = await Staking.deployed();
        let initialBalance = await instance.getBalance(accounts[0]);

        await instance.unstake({ from: accounts[0] });
        let finalBalance = await instance.getBalance(accounts[0]);

        assert(initialBalance > finalBalance, "Staking balance should reset after unstaking");
    });
});
