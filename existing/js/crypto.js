const TARGET_CHAIN_ID = 0x13882;
export const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      // Request account access
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(accounts[0]);
      alert(accounts[0])
      // Check the network chain ID
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      if (chainId !== TARGET_CHAIN_ID) {
        alert('Please switch to the correct network (chainId: 84532).');

      } else {


        console.log(accounts[0]); // Fetch ENS name after successful connection
      }
    } catch (error) {
      console.error("Error connecting to wallet: ", error);
    }
  } else {
    alert('MetaMask is not installed. Please install it to use this feature.');
  }
};