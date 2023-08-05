/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Web3 from "web3";
import ERC20Abi from "../constants/ERC20Abi.json";
import { getEtherToWei, getWeiToEther } from "../utils/balanceConverter";
import { toast } from "react-toastify";
import { addressShrinker } from "../utils/addressShrinker";

function useTokenTransfer() {
  const [isConnectLoading, setIsConnectLoading] = useState<boolean>(false);
  const [currentWalletAddress, setCurrentWalletAddress] = useState<string>("");
  const [tokenBalance, setTokenBalance] = useState<{
    value: number;
    isDisplay: boolean;
    isLoading: boolean;
  }>({
    value: 0,
    isDisplay: false,
    isLoading: false,
  });
  const [isTransferLoading, setIsTransferLoading] = useState<boolean>(false);

  const { ethereum } = window;

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return toast.error("Plase install a web3 wallet");
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
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
        return toast.error("Plase install a web3 wallet");
      }
      setIsConnectLoading(true);
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentWalletAddress(accounts[0]);

      setIsConnectLoading(false);
    } catch (err) {
      setIsConnectLoading(false);
      console.log(err);

      throw new Error("No etherium object");
    }
  };
  const getErc20TokenBalance = async (ethContractAddress: string) => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const tokenInst = new web3.eth.Contract(
          ERC20Abi as any,
          ethContractAddress
        );
        setTokenBalance({ ...tokenBalance, isLoading: true });
        const balance = await tokenInst.methods
          .balanceOf(currentWalletAddress)
          .call();

        setTokenBalance({
          value: getWeiToEther(Number(balance)),
          isDisplay: true,
          isLoading: false,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong! Plese try again");
      setTokenBalance({
        value: 0,
        isDisplay: false,
        isLoading: false,
      });
    }
  };

  const handleTransferToken = async (
    ethContractAddress: string,
    recieverAddress: string,
    amount: number
  ) => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const tokenInst = new web3.eth.Contract(
          ERC20Abi as any,
          ethContractAddress
        );
        setIsTransferLoading(true);
        await tokenInst.methods
          .transfer(recieverAddress, getEtherToWei(amount))
          .send({ from: currentWalletAddress });
      }
      setIsTransferLoading(false);
      toast.success(
        `${amount} sent successfull to ${addressShrinker(recieverAddress)}`
      );
    } catch (err) {
      toast.error("User Permisson Denied");
      console.log(err);
      setIsTransferLoading(false);
    }
  };

  return {
    checkIfWalletIsConnected,
    connectWallet,
    isConnectLoading,
    getErc20TokenBalance,
    currentWalletAddress,
    tokenBalance,
    handleTransferToken,
    isTransferLoading,
  };
}

export default useTokenTransfer;
// 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 weth
// 0x6600d262b3c7a6a6c0eede07a6b25927d7288df6 metamask-wallet
