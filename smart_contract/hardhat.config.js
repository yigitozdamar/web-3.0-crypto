// https://eth-ropsten.alchemyapi.io/v2/oPzPpUWpHEHKF6-7GX_JjOTSXvYGHKu9

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/oPzPpUWpHEHKF6-7GX_JjOTSXvYGHKu9",
      accounts: [
        "c14dc526c37f7ee03143691c08ab9e211279439b0f2892d9c88ba1a1ebb9dcab",
      ],
    },
  },
};
