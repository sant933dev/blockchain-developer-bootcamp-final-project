# Design patterns used

## Access Control Design Patterns

- `Ownable` design pattern used in the following functions: `safeMint()`. These functions do not need to be used by anyone else apart from the contract creator . 

- The following functions are restricted 
    - `approve` can only be called by the owner.
    - `transfer` can only be called by the owner or the approved.

## Inheritence and Interfaces

- The `CosmoToken` contract inherits from Open Zeppelin `Ownable.sol`,`ERC721URIStorage`, `ERC721Burnable`
