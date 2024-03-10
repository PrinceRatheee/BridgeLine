// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Interface for the balance oracle
interface BalanceOracle {
    function getBalance(address account) external view returns (uint256);
}

contract Reserve {
    mapping(string => address) public countryReserves;
    mapping(address => uint256) public reserves;

    constructor() {
        // Dummy values for reserves of two countries
        countryReserves["Country1"] = address(0xdb0f5CF4dD96E36822f6DB81c8baf3DAb1A8E20d); // Replace with actual address
        countryReserves["Country2"] = address(0x7D8E3dc4F23b1EFA7AccD8E09EAba6b8625b42De); // Replace with actual address

        reserves[countryReserves["Country1"]] = 10 ether;
        reserves[countryReserves["Country2"]] = 2 ether;
    }
}

contract PeerToPeerTransfer is Reserve {
    mapping(address => string) public userCountry;
    address public balanceOracleAddress;
    address public owner;
    bool public ownerSet;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can call this function");
        _;
    }

    modifier ownerNotSet() {
        require(!ownerSet, "Owner address is already set");
        _;
    }

    constructor(address _balanceOracleAddress, address _owner) {
        owner = _owner; // Set the owner address during deployment
        ownerSet = true;
        balanceOracleAddress = _balanceOracleAddress;
    }

    function depositToReserve() internal {
        string memory country = userCountry[msg.sender];
        require(countryReserves[country] != address(0), "User country reserve not set");

        // Fetch balance from the balance oracle
        BalanceOracle oracle = BalanceOracle(balanceOracleAddress);
        uint256 balance = oracle.getBalance(msg.sender);
        require(balance >= msg.value, "Insufficient balance");

        // Deposit logic, assuming the reserve is associated with the country
        reserves[countryReserves[country]] += msg.value;
    }

    function peerToPeerTransfer(address recipient, uint256 amount) external payable {
        // Deposit the amount into the sender's reserve
        depositToReserve();

        // Check if the recipient's reserve has enough funds
        string memory recipientCountry = userCountry[recipient];
        require(countryReserves[recipientCountry] != address(0), "Recipient country reserve not set");
        require(reserves[countryReserves[recipientCountry]] < amount, "Recipient country reserve has insufficient funds");

        reserves[countryReserves[recipientCountry]] -= amount;
        payable(recipient).transfer(amount);
    }

    function withdraw() public view  onlyOwner {
        // No implementation
        revert("Owner cannot withdraw funds");
    }
}