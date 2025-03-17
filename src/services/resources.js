export const orokiiNetwork = [
    {
      chainId: "0x1", // 1 in decimal
      network: "Ethereum",
      token: "ETH",
      contract: null,
      rpc: "https://rpc.lokibuilder.xyz/wallet", // Replace with your RPC
      symbol: "ETH",
      decimal: 18
    },
    {
      chainId: "0x1",
      network: "Ethereum",
      token: "USDC",
      rpc: "https://rpc.lokibuilder.xyz/wallet",
      symbol: "USDC",
      decimal: 6
    },
    {
      chainId: "0x1",
      network: "Ethereum",
      token: "USDT",
      rpc: "https://rpc.lokibuilder.xyz/wallet",
      symbol: "USDT",
      decimal: 6
    },
    {
      chainId: "0x1",
      network: "Ethereum",
      token: "DAI",
      rpc: "https://rpc.lokibuilder.xyz/wallet",
      symbol: "DAI",
      decimal: 18
    },
    {
      chainId: "0x89", // 137 in decimal
      network: "Polygon",
      token: "MATIC",
      rpc: "https://polygon-rpc.com",
      symbol: "MATIC",
      contract: null,
      decimal: 18
    },
    {
      chainId: "0x89",
      network: "Polygon",
      token: "USDC",
      rpc: "https://polygon-rpc.com",
      symbol: "USDC",
      decimal: 6
    },
    {
      chainId: "0x89",
      network: "Polygon",
      token: "USDT",
      rpc: "https://polygon-rpc.com",
      symbol: "USDT",
      decimal: 6
    },
    {
      chainId: "0x89",
      network: "Polygon",
      token: "DAI",
      rpc: "https://polygon-rpc.com",
      symbol: "DAI",
      decimal: 18
    },
    {
      chainId: "0xa", // 10 in decimal
      network: "Optimism",
      token: "ETH",
      rpc: "https://mainnet.optimism.io",
      symbol: "ETH",
      contract: null,
      decimal: 18
    },
    {
      chainId: "0xa",
      network: "Optimism",
      token: "USDC",
      rpc: "https://mainnet.optimism.io",
      symbol: "USDC",
      contract: "0x7f5c764cbc14f9669b88837ca1490cca17c31607", // USDC contract on Optimism
  
      decimal: 6
    },
    {
      chainId: "0xa",
      network: "Optimism",
      token: "USDT",
      rpc: "https://mainnet.optimism.io",
      symbol: "USDT",
      decimal: 6
    },
    {
      chainId: "0xa",
      network: "Optimism",
      token: "DAI",
      contract: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // DAI contract on Optimism
  
      rpc: "https://mainnet.optimism.io",
      symbol: "DAI",
      decimal: 18
    },
    {
      chainId: "0xa4b1",
      chain: "42161",
      network: "Arbitrum",
      token: "ETH",
      contract: null,
      rpc: "https://arbitrum.llamarpc.com	",
      symbol: "ETH",
      decimal: 18
    },
    {
      chainId: "0xa4b1",
      chain: "42161",
      network: "Arbitrum",
      token: "USDC",
      contract: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8", // USDC contract on Arbitrum
  
      rpc: "https://arbitrum.llamarpc.com	",
      symbol: "USDC",
      decimal: 6
    },
    {
      chainId: "0xa4b1",
      chain: "42161",
      network: "Arbitrum",
      token: "USDT",
      rpc: "https://arbitrum.llamarpc.com	",
      symbol: "USDT",
      decimal: 6
    },
    {
      chainId: "0xa4b1",
      chain: "42161",
      network: "Arbitrum",
      token: "DAI",
      contract: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1", // DAI contract on Arbitrum
  
      rpc: "https://arbitrum.llamarpc.com	",
      symbol: "DAI",
      decimal: 18
    },
    {
      chainId: "0x2105", // 8453 in decimal
      network: "Base",
      token: "ETH",
      contract: null,
      rpc: "https://mainnet.base.org",
      symbol: "ETH",
      decimal: 18
    },
    {
      chainId: "0x2105",
      network: "Base",
      token: "USDC",
  
      rpc: "https://mainnet.base.org",
      symbol: "USDC",
      decimal: 6
    },
    {
      chainId: "0xa4ec", // 42220 in decimal
      network: "Celo",
      token: "CELO",
      contract: null,
      rpc: "https://forno.celo.org",
      symbol: "CELO",
      decimal: 18
    },
    {
      chainId: "0xa4ec",
      network: "Celo",
      token: "cUSD",
      contract: "0x765de816845861e75a25fca122bb6898b8b1282a", // cUSD contract on Celo
  
      rpc: "https://forno.celo.org",
      symbol: "cUSD",
      decimal: 18
    },
    {
      chainId: "0xa4ec",
      network: "Celo",
      token: "USDC",
      contract: "0x37f750b7cc259a2f741af45294f6a16572cf5cad", // USDC contract on Celo
  
      rpc: "https://forno.celo.org",
      symbol: "USDC",
      decimal: 6
    }
  ];
 export const orokiiTestnetNetworks = [
    {
      chainId: "", // 5 in decimal
      chain: "",
      network: "Bitcoin",
      token: "BTC",
      contract: null,
      rpc: "",
      symbol: "",
      decimal: 0
    },
    {
      chainId: "", // 5 in decimal
      chain: "",
      network: "Solana",
      token: "SOL",
      contract: null,
      rpc: "",
      symbol: "",
      decimal: 0
    },
    {
      chainId: "0x18fe", // 5 in decimal
      chain: "6398",
      network: "Sepolia",
      token: "ETH",
      contract: null,
      rpc: "https://rpc.connext-sepolia.gelato.digital",
      symbol: "ETH",
      decimal: 18
    },
    {
      chainId: "0x18fe",
      chain: "6398",
      network: "Sepolia",
      token: "USDC",
      rpc: "https://rpc.connext-sepolia.gelato.digital",
      symbol: "USDC",
      decimal: 6,
      contract: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F" // Sepolia USDC
    },
    {
      chainId: "0x18fe",
      chain: "6398",
      network: "Sepolia",
      token: "USDT",
      rpc: "https://rpc.connext-sepolia.gelato.digital",
      symbol: "USDT",
      decimal: 6,
      contract: "0x18fe09Ee0d083DdF8AC028f2a56731412edD63223B9" // Sepolia USDT
    },
    {
      chainId: "0x18fe",
      chain: "6398",
      network: "Sepolia",
      token: "DAI",
      rpc: "https://rpc.connext-sepolia.gelato.digital",
      symbol: "DAI",
      decimal: 18,
      contract: "0x73967c6a0904aA032C103b4104747E88c566B1A2" // Sepolia DAI
    },
    {
      chainId: "0x13882", // 80002 in decimal
      chain: "80002",
      network: "Amoy",
      token: "POL",
      rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
      symbol: "POL",
      contract: null,
      decimal: 18
    },
    {
      chainId: "0x13882",
      chain: "80002",
      network: "Amoy",
      token: "OPY",
      rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
      symbol: "OPY",
      decimal: 18,
      contract: "0xF235fCA1026202D6d497d00d7fc812060f70286d" // Amoy OPY
    },
    {
      chainId: "0x13882",
      chain: "80002",
      network: "Amoy",
      token: "USDC",
      rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
      symbol: "USDC",
      decimal: 6,
      contract: "0x0FA8781a83E46826621b3BC094Ea2A0212e71B23" // Amoy USDC
    },
    {
      chainId: "0x13882",
      chain: "80002",
      network: "Amoy",
      token: "USDT",
      rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
      symbol: "USDT",
      decimal: 6,
      contract: "0x3813e82e6f7098b9583FC0F33a962D02018B6803" // Amoy USDT
    },
    {
      chainId: "0x13882",
      chain: "80002",
      network: "Amoy",
      token: "DAI",
      rpc: "https://polygon-amoy.blockpi.network/v1/rpc/public",
      symbol: "DAI",
      decimal: 18,
      contract: "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F" // Amoy DAI
    },
    {
      chainId: "0x1a4", // 420 in decimal
      chain: "420",
      network: "Optimism Sepolia",
      token: "ETH",
      rpc: "https://Sepolia.optimism.io",
      symbol: "ETH",
      contract: null,
      decimal: 18
    },
    {
      chainId: "0x1a4",
      chain: "420",
      network: "Optimism Sepolia",
      token: "USDC",
      rpc: "https://Sepolia.optimism.io",
      symbol: "USDC",
      contract: "0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E", // USDC on Optimism Sepolia
      decimal: 6
    },
    {
      chainId: "0x66eed", // 421613 in decimal
      chain: "421613",
      network: "Arbitrum Sepolia",
      token: "ETH",
      contract: null,
      rpc: "https://Sepolia-rollup.arbitrum.io/rpc",
      symbol: "ETH",
      decimal: 18
    },
    {
      chainId: "0x66eed",
      chain: "421613",
      network: "Arbitrum Sepolia",
      token: "USDC",
      contract: "0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892", // USDC on Arbitrum Sepolia
      rpc: "https://Sepolia-rollup.arbitrum.io/rpc",
      symbol: "USDC",
      decimal: 6
    },
    {
      chainId: "0x14a33", // 84531 in decimal
      chain: "84531",
      network: "Base Sepolia",
      token: "ETH",
      contract: null,
      rpc: "https://Sepolia.base.org",
      symbol: "ETH",
      decimal: 18
    },
    {
      chainId: "0x14a33",
      chain: "84531",
      network: "Base Sepolia",
      token: "USDC",
      rpc: "https://Sepolia.base.org",
      symbol: "USDC",
      contract: "0x2e9F75DF8839ff192Da27e977CD154FD1EAE03cf", // USDC on Base Sepolia
      decimal: 6
    },
    {
      chainId: "0x1389", // 5001 in decimal
      chain: "5001",
      network: "Mantle Testnet",
      token: "MNT",
      contract: null,
      rpc: "https://rpc.testnet.mantle.xyz",
      symbol: "MNT",
      decimal: 18
    },
    {
      chainId: "0xaef3", // 44787 in decimal
      chain: "44787",
      network: "Celo Alfajores",
      token: "CELO",
      contract: null,
      rpc: "https://alfajores-forno.celo-testnet.org",
      symbol: "CELO",
      decimal: 18
    },
    {
      chainId: "0xaef3",
      chain: "44787",
      network: "Celo Alfajores",
      token: "cUSD",
      contract: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1", // cUSD on Celo Alfajores
      rpc: "https://alfajores-forno.celo-testnet.org",
      symbol: "cUSD",
      decimal: 18
    }
  ];