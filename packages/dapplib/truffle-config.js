require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture stool radar soap method hockey kiwi slot gift'; 
let testAccounts = [
"0x29c1816938b12e101b36125ada76622754473a60b090dc4bfd560989fba07fb3",
"0xadb5f9147ab750c9e5eee528a1b0fbfe1fa72025baa35fcf04c320f651d013da",
"0x1c3e676f90e4513904b354369da1a1ff937a5594270c7b9c3542519352547e9a",
"0x45d2f9c665c07001d4c9c1970ef488f6367269bef9d2bcc2ec30eade27337e2e",
"0xdf059cf6d6207b129e0578f11dd1469ab4d850f1c0581140e548d14cc4029454",
"0xcf63e5cc8092fe090d2e3b7d8f3a7871f6facf533cdfc61376d0046b87260b21",
"0x6da192ae8ab68c6dbc8e713493bdfdb68f9d3ab766dc17f69c1dd56c100c3d65",
"0x755085d8733d14d099d5a522471655fd999708fe096c12b36ab66f822ddc3bd7",
"0xc614114591322ad82028a75c60c94e43dbf87a9cfe44ca5335c5f28a17939855",
"0x4d239d0d78c659c7c5d19138aa40e5427a70d601b4dd8888d406aaaa475e6ea3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

