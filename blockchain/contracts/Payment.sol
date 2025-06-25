// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Payment {
    event Paid(address indexed payer, uint amount);

    function pay() external payable {
        require(msg.value > 0, "Must send ETH");
        emit Paid(msg.sender, msg.value);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
