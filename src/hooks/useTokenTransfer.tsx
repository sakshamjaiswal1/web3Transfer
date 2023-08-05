/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Web3 from "web3";
import  erc20TokenAbi from "../constants/erc20TokenAbi";

function useTokenTransfer() {
  const [isConnectLoading, setIsConnectLoading] = useState<boolean>(false);
  const [currentWalletAddress, setCurrentWalletAddress] = useState<string>("");
  //   const handleFetchBalance = () => {

  //   };

  const { ethereum } = window;

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return alert("Please Install Metamask");
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        console.log(accounts);
      } else {
        console.log("no accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No etherium object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please Install Metamask");
      }
      setIsConnectLoading(true);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentWalletAddress(accounts[0]);
      setIsConnectLoading(false);
      console.log(accounts[0], "ddd");
    } catch (err) {
      setIsConnectLoading(false);
      console.log(err);
      throw new Error("No etherium object");
    }
  };

  const getErc20TokenBalance = async (ethContractAddress: string) => {
    console.log(ethContractAddress);
    try {
      const web3 = new Web3("http://localhost:8545");
      const tokenInst = new web3.eth.Contract(
        erc20TokenAbi,
        ethContractAddress
      );
      const balance = await tokenInst.methods.balanceOf().call();
      console.log(balance);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return {
    checkIfWalletIsConnected,
    connectWallet,
    isConnectLoading,
    getErc20TokenBalance,
    currentWalletAddress,
  };
}

export default useTokenTransfer;
// import React, { useState } from "react";
// import Web3 from "web3";
// import TokenContractABI from "./TokenContractABI.json"; // Replace with the actual ERC20 contract ABI

// const TransferTokens = () => {
//   const [recipientAddress, setRecipientAddress] = useState("");
//   const [amount, setAmount] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleTransfer = async () => {
//     try {
//       // Connect to Ethereum network using Metamask
//       if (window.ethereum) {
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         const web3 = new Web3(window.ethereum);
//         const contractAddress = "YOUR_ERC20_CONTRACT_ADDRESS"; // Replace with the actual ERC20 contract address
//         const tokenContract = new web3.eth.Contract(TokenContractABI, contractAddress);

//         // Get the user's Ethereum address
//         const accounts = await web3.eth.getAccounts();
//         const userAddress = accounts[0];

//         // Check user's token balance
//         const balance = await tokenContract.methods.balanceOf(userAddress).call();

//         if (Number(amount) <= 0) {
//           setErrorMessage("Please enter a valid amount.");
//           return;
//         }

//         if (Number(amount) > Number(balance)) {
//           setErrorMessage("Insufficient balance.");
//           return;
//         }

//         // Perform the token transfer
//         await tokenContract.methods.transfer(recipientAddress, amount).send({ from: userAddress });
//         setErrorMessage("Tokens transferred successfully.");
//       } else {
//         setErrorMessage("Please install Metamask to use this feature.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred during the token transfer.");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Recipient's Ethereum Address"
//         value={recipientAddress}
//         onChange={(e) => setRecipientAddress(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button onClick={handleTransfer}>Transfer Tokens</button>
//       {errorMessage && <p>{errorMessage}</p>}
//     </div>
//   );
// };

// export default TransferTokens;
