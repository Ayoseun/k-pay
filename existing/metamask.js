56
// import MetaMaskOnboarding from "@metamask/onboarding";


// const onboarding = new MetaMaskOnboarding();


// const isMetaMaskInstalled = () => {
//   const { ethereum } = window;
//   return Boolean(ethereum && ethereum.isMetaMask);
// };

// let connected = (accounts) => {

// console.log(accounts[0])
// };

// async function connectWallet() {
//   return await ethereum.request({ method: "eth_accounts" });
// }

// const onClickInstallMetaMask = () => {
//   onboarding.startOnboarding();

// };

// connectWalletButton.addEventListener("click", async () => {

//   try {
//     const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//     connected(accounts);
//   } catch (error) {
//     console.error(error);
//   }
// });

// const MetaMaskClientCheck = () => {
//   if (!isMetaMaskInstalled()) {
//     alert('Please call metamask');
//   } else {
//     connectWallet().then((accounts) => {
//       if (accounts && accounts[0] > 0) {
//         connected(accounts);
//       } else {
//         alert('Please call metamask');
//       }
//     });
//   }
// };

// MetaMaskClientCheck();