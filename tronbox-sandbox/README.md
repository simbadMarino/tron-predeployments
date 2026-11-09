### Tronbox deployment method
⚠️ Not proven succesful yet, experimentation on-going ⚠️
Nile Multicall3 candidate deployment. 
Requirements: 
- Temporary Nile deployment 
- eth_getCode matches Ethereum [deployment](0xcA11bde05977b3631167028862bE2a173976CA11) 
    - runtime hash: `0xd5c15df687b16f2ff992fc8d767b4216323184a2bbc6ee2f9c398c318e770891`
    - runtimeBytes: Ethereum's exact `3,808-byte` runtime verbatim
- Contract metadata (from Ethereum deployment)
    - Optimization enabled with 10000000 runs
    - EVM version defaultVersion
    - Compiler: v0.8.12+commit.f00d7308
- Record contract metadata utilized
- Record deployment transaction
- Node/VM settings recorded


## Configuration

⚠️ TRON Solidity compiler version 0.8.12 was not released for TRON, thus, producing a verbatim contract deployment using tronbox is not posible. Using EVM Solidity compiler should be feasible but will be recorded separately. ⚠️

## Compiling

To compile your contracts, use the following command:

```shell
tronbox compile
```

## Migration

The project comes pre-configured with four separate networks:

- Mainnet (https://api.trongrid.io)
- Shasta Testnet (https://api.shasta.trongrid.io)
- Nile Testnet (https://nile.trongrid.io).
- Localnet (http://127.0.0.1:9090)

### Mainnet

To deploy your contracts to Mainnet, you can run the following:

```shell
tronbox migrate --network mainnet
```

### Nile Testnet

Obtain test coin at https://nileex.io/join/getJoinPage

To deploy your contracts to Nile Testnet, you can run the following:

```shell
tronbox migrate --network nile
```

### Localnet

The TronBox Runtime Environment provides a complete development framework for Tron, including a private network for testing.

Get tronbox/tre docker image at https://hub.docker.com/r/tronbox/tre

To deploy your contracts to Localnet, you can run the following:

```shell
tronbox migrate
```


