// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Simple {

    uint storedData;

    function setStoreData(uint data) public {
        storedData = data;
    }

    function getStoreData() view public returns (uint) {
        return (storedData);
    }

}
