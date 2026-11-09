### EVM Solidity compiler (trontools.org) method 
⚠️ Not proven succesful yet, experimentation on-going ⚠️

This method leverages the EVM Solidity compiler (due to non-released 0.8.12 tron-solidity) to deploy a verbatim byte-to-byte copy of Ethereum's Multicall3 contract defined in this repo README requirements section.

- Latest succesful deployment lives in `TEhEZW7TBxsZYrVa8aFHBs8toUN4NENHaG` (`0x33D34675859B0C65ccDf3DF950D153116B9f17Af`)
- Deployment Txn hash: `950ef5e8dbebf304562600173e09de03a78af7b1c06d241749b39fac4cc6d6d3`

#### Deployment steps:

1. Configure Compiler settings as follows:
    - Solidity version: 0.8.12 (soljson-v0.8.12+commit.f00d7308.js) 
    - Optimization enabled with 10000000 runs
    - evm versio: London
    - License: MIT
2. Compile contract utilizing the EVM solidity compiler e.g. using [trontools.org](https://trontools.org/energy-and-bandwith-calculator) or similar. ⚠️ Not proven, trontools.org failed to reproduce the same runtime hash
2. Deploy contract

#### Verbatimness check:

1. Get Nile deployed bytecode, confirm runtimeBytes (expected: 3808)

```bash
OUTPUT=$(curl -s -X POST 'https://nile.trongrid.io/jsonrpc' \
  -H 'Content-Type: application/json' \
  --data '{
    "jsonrpc": "2.0",
    "method": "eth_getCode",
    "params": ["0x33D34675859B0C65ccDf3DF950D153116B9f17Af", "latest"],
    "id": 64
  }' | jq -r '.result')
HEX=${OUTPUT#0x}
echo $HEX >> output/output.hex
echo $(( ${#HEX} / 2 )) 
```

2. Confirm runtime hash (expected: `0xd5c15df687b16f2ff992fc8d767b4216323184a2bbc6ee2f9c398c318e770891`)

```bash
   brew install sha3sum    #Optional, you may use any keccak-256 checksum utility
   keccak-256sum -x output/output.hex
```