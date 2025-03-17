import { ethers } from 'ethers';

// Extended ERC20 ABI to include approve function
const ERC20_ABI = [
  'function transfer(address to, uint256 value) returns (bool)',
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 value) returns (bool)'
];

/**
 * Transfer native ETH to a recipient
 * @param {string} recipientAddress - The recipient's Ethereum address
 * @param {string|number} amount - Amount in ETH to send
 * @returns {Promise<ethers.TransactionResponse>}
 */
async function transferETH(provider,recipientAddress, amount) {
  try {
    // Input validation
    if (!ethers.isAddress(recipientAddress)) {
      throw new Error('Invalid recipient address');
    }
    
    if (!amount || amount <= 0) {
      throw new Error('Invalid amount');
    }

    
    const signer = await provider.getSigner();
    
    const balance = await provider.getBalance(await signer.getAddress());
    const amountInWei = ethers.parseEther(amount.toString());
    console.log(amountInWei)
    if (balance < amountInWei) {
      throw new Error('Insufficient balance');
    }

    const tx = {
      to: recipientAddress,
      value: amountInWei,
    };

    const transaction = await signer.sendTransaction(tx);
    const receipt = await transaction.wait();
    
    return {
      success: true,
      hash: receipt.hash,
      blockNumber: receipt.blockNumber,
      from: receipt.from,
      to: receipt.to,
      gasUsed: receipt.gasUsed
    };

  } catch (error) {
    console.error('ETH transfer failed:', error);
    return {
      success: false,
      error: error.message || 'Transaction failed',
      details: error
    };
  }
}

/**
 * Check and handle token approval
 * @param {ethers.Contract} tokenContract - The token contract instance
 * @param {string} spenderAddress - The address to approve
 * @param {ethers.BigNumber} amount - Amount to approve
 * @returns {Promise<boolean>}
 */
async function checkAndApproveToken(tokenContract, spenderAddress, amount) {
  try {
    const signer = await tokenContract.signer;
    const userAddress = await signer.getAddress();
    
    // Check current allowance
    const currentAllowance = await tokenContract.allowance(userAddress, spenderAddress);
    
    if (currentAllowance < amount) {
      console.log('Requesting token approval...');
      
      // Request approval for a large amount (MAX_UINT256) to avoid future approvals
      const approvalTx = await tokenContract.approve(
        spenderAddress,
        ethers.MaxUint256
      );
      
      const approvalReceipt = await approvalTx.wait();
      console.log('Token approval confirmed:', approvalReceipt.hash);
      
      // Verify the approval was successful
      const newAllowance = await tokenContract.allowance(userAddress, spenderAddress);
      if (newAllowance < amount) {
        throw new Error('Approval failed');
      }
    }
    
    return true;
  } catch (error) {
    console.error('Token approval failed:', error);
    throw error;
  }
}

/**
 * Transfer ERC20 tokens to a recipient
 * @param {string} tokenAddress - The token contract address
 * @param {string} recipientAddress - The recipient's address
 * @param {string|number} amount - Amount of tokens to send
 * @param {string} spenderAddress - Address of the contract that will spend the tokens (optional)
 * @returns {Promise<ethers.TransactionResponse>}
 */
async function transferToken( tokenAddress, recipientAddress, amount, spenderAddress = null) {
  try {
    // Input validation
    if (!ethers.isAddress(tokenAddress)) {
      throw new Error('Invalid token address');
    }
    
    if (!ethers.isAddress(recipientAddress)) {
      throw new Error('Invalid recipient address');
    }
    
    if (!amount || amount <= 0) {
      throw new Error('Invalid amount');
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    // Create contract instance
    const tokenContract = new ethers.Contract(
      tokenAddress,
      ERC20_ABI,
      signer
    );

    // Get token info
    const decimals = await tokenContract.decimals();
    const symbol = await tokenContract.symbol();
    const amountInSmallestUnit = ethers.parseUnits(amount.toString(), decimals);
    
    // Check balance
    const balance = await tokenContract.balanceOf(await signer.getAddress());
    if (balance < amountInSmallestUnit) {
      throw new Error(`Insufficient ${symbol} balance`);
    }

    // If spender address is provided, check and handle approval
    if (spenderAddress) {
      await checkAndApproveToken(tokenContract, spenderAddress, amountInSmallestUnit);
    }

    // Send transaction
    const transaction = await tokenContract.transfer(
      recipientAddress,
      amountInSmallestUnit
    );
    
    const receipt = await transaction.wait();
    
    return {
      success: true,
      hash: receipt.hash,
      blockNumber: receipt.blockNumber,
      from: receipt.from,
      to: receipt.to,
      tokenAddress,
      tokenSymbol: symbol,
      gasUsed: receipt.gasUsed
    };

  } catch (error) {
    console.error('Token transfer failed:', error);
    throw {
      success: false,
      error: error.message || 'Transaction failed',
      details: error
    };
  }
}

// Example usage
async function exampleTokenTransferWithApproval() {
  try {
    // Example addresses (replace with actual addresses)
    const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI
    const recipientAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
    const spenderAddress = '0x1234...'; // Contract that will spend the tokens
    
    const result = await transferToken(
      tokenAddress,
      recipientAddress,
      100,          // amount
      spenderAddress // if you're using a contract to transfer
    );
    
    console.log('Transfer successful:', result);
  } catch (error) {
    console.error('Transfer failed:', error);
  }
}

export { transferETH, transferToken, checkAndApproveToken };