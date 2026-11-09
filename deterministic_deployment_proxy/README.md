### Deterministic deployment proxy deployment method
✅ Succesful deployment ✅


This method leverages a previously deployed Deterministic Deployment Proxy [contract](https://nile.tronscan.org/contract/TWuVdPuZ6yo3CGWbCHqwrQLxKvnU5KpJTL/code) in Nile to deploy a verbatim byte-to-byte copy of Ethereum's Multicall3 contract defined in this repo README requirements section.

- Latest succesful deployment lives in `TWvMn1B9YpY1iti4mobjs6wr2DsvW2y5Gt` (`0xe5d0b7efa9d26E510BE04C48Ba6D8f756bcc15d5`)
- Deployment Txn hash: `ced5b84c3700b757bdfecfecf69bc411286a54512374879f25cf967b6949b277`

#### Deployment steps:

1. Get deployed bytecode from Multicall3 Ethereum's contract (either from [etherscan](https://etherscan.io/address/0xcA11bde05977b3631167028862bE2a173976CA11#code) or `getCode` JSON-RPC endpoint)
2. Deploy the bytecode AS IS (including a `0x` hex prefix) using the deploy function from TRON Nile deterministic deployment proxy contract. Any uint256 salt should suffice.

#### Verbatimness check:

1. Get Nile deployed bytecode, confirm runtimeBytes (expected: 3808)

```bash
OUTPUT=$(curl -s -X POST 'https://nile.trongrid.io/jsonrpc' \
  -H 'Content-Type: application/json' \
  --data '{
    "jsonrpc": "2.0",
    "method": "eth_getCode",
    "params": ["0xe5d0b7efa9d26E510BE04C48Ba6D8f756bcc15d5", "latest"],
    "id": 64
  }' | jq -r '.result')
HEX=${OUTPUT#0x}
echo $HEX >> output/output.hex
echo $(( ${#HEX} / 2 )) bytes
```

2. Confirm runtime hash (expected: `0xd5c15df687b16f2ff992fc8d767b4216323184a2bbc6ee2f9c398c318e770891`)

```bash
   brew install sha3sum    #Optional, you may use any keccak-256 checksum utility
   keccak-256sum -x output/output.hex
```
