require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift radar snow quantum guess arena equal giant'; 
let testAccounts = [
"0x213c9f23a9ec295b3f1e914c95c5702c19ea97e875391197b04ddaaf3575cf23",
"0x37d3ad3f9d8ed1b40f0550bf3e97eb188df465af4b7778497deaa9bd3664d0bd",
"0xc920aaff7cb8a33b71ca1d89da421bebee6fe10baf516626bd7b277e721ce387",
"0xd9e2d172b64a67e8f2a5d59fdf619bdbf58935114a77678102bc6dbd2300515f",
"0xf6c7f0b287c8371bdeaf01efd433eba62bb3d58ab197cbdfca4102c718ac62df",
"0x99274f1afe58b22fe81d0e7599262b778d984b8f8835926327f06484fb8224e0",
"0x32043ed7db03412dbc1ef8adbc4085f89232c52203e52c1dacc36fd67a28f796",
"0x1fe04d84b5972e30af93c26ed74eaa50efba90872feadb5d0fa717184c5f9ffc",
"0xd2679c8e69933b3b8f7652106be1473c0edc4753a5411d7478df3efcf4553752",
"0x3158c20ab9be82557c62dd5d261c1a6c9ef0f7f54d937be45abc3e24385bb8ef"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


