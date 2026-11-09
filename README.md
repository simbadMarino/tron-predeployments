### TRON Singleton predeployment experiments and notes

#### Goal and motivation

See [TIP-936](https://github.com/tronprotocol/tips/issues/936)



Multicall3 Case Study Nile deployment Requirements:


Requirements: 
- eth_getCode matches Ethereum [deployment](0xcA11bde05977b3631167028862bE2a173976CA11) 
    - runtime hash: `0xd5c15df687b16f2ff992fc8d767b4216323184a2bbc6ee2f9c398c318e770891`
    - runtimeBytes: Ethereum's exact `3,808-byte` runtime verbatim
- Contract metadata (from Ethereum deployment)
    - Optimization enabled with 10000000 runs
    - EVM version defaultVersion
    - Compiler: v0.8.12+commit.f00d7308




Succesful deployment methods:

- Deterministic Deployment Proxy [method](https://github.com/simbadMarino/tron-predeployments/tree/main/deterministic_deployment_proxy) 
