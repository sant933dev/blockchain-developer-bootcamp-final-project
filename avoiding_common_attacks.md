# Security considerations

## Proper Use of Require, Assert and Revert 

- All the input user parameters are asserted and verified for legal values and suitable revert is thrown on issues.

## Use Modifiers Only for Validation 

- The validations have been used at various stages to gaurd against actions that are not allowed.
  (Example: royalty percentage cannot be less than 0 or more than 100)

## SWC-115 Authorization through tx.origin
- Owner authentication is done using msg.sender and not tx.origin.

## Mathematical operations are done using SafeMath