# cra-template-web3js
This is [web3.js](https://github.com/ethereum/web3.js) app template for [Create React App](https://github.com/facebook/create-react-app).

It  pre-installs `web3.js` library with Typescript type definitions and [TypeChain](https://github.com/ethereum-ts/TypeChain) library that helps to generate type definitions for Ethereum smart contracts. To generate contracts types, you can use predefined script `gen-contracts`(for example `yarn gen-contracts`).

Pre-defined project structure:
```
./src
 - abi/        -- storage dir for ABIs
 - contracts/  -- storage dir for TypeChain generated contract types
``` 

## How to use this template
To use this template, use flag `--template web3js` when creating a new app. For example:
```
npx create-react-app my-app --template web3js

# or

yarn create react-app my-app --template web3js
```

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.