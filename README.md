# Drizzle enabled Membership Boilerplate

Simple node membership system that has drizzle installed, and authentication functions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

MetaMask, Node


### Installing

A step by step series of examples that tell you how to get a development env running

Git clone this repo

```
git clone https://github.com/tommycp3/drizzle-membership-boilerplate.git
```


```
npm run chain
```

Install MetaMask browser extention and ensure you have at least 1 generated account.

* [MetaMask](https://metamask.io/) - The web framework used

Edit your ~/.profile file to include your MetaMask accounts

```
nano ~/.profile
```

```
export PATH=/Users/thomasmiller/bin:$PATH
export EXTERNAL_ALLOCS=ACCOUNT1
```

e.g. see below

```
export PATH=/Users/thomasmiller/bin:$PATH
export EXTERNAL_ALLOCS=0xB144024e2B9f86249574fB3e74BDDfE17813CD30,0xcC62A08E24e75BfDb00733D17F43fbC57C5da242,0xd89768fAb0c8413Ad2FE33D36716eaA187afA4f1,0xb69393c5825EE7A21a7f817047240fCE57DE5C78
```

IMPORANT Gotcha - make sure you refresh your profile instance each time your restart your blockchain or else you will find you don't have any ether in your accounts.

```
source ~/.profile
```

Open project folder in console and start the testing chain

```
npm run chain
```

Connect to local chain via MetaMask on localhost port 8545

Compile and deploy your contracts

```
truffle compile
```



```
truffle migrate
```

Run npm run stat to start your application and visit http://localhost:3000/
```
npm run start
```