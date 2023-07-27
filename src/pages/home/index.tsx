import { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TokenBalanceBox from "../../components/home/tokenBalanceBox";
import TokenTransferBox from "../../components/home/tokenTransferBox";
import { IUserData } from "../../interfaces/userData.interface";

function Home() {
  const [userData, setUserData] = useState<IUserData>({
    senderAddress: "",
    receiverAdress: "",
    amount: 0,
  });

  return (
    <div className="w-full h-full">
      <Header />
      <div className=" bg-white  min-h-[calc(100vh-465px)] h-full my-[80px]">
        <TokenBalanceBox userData={userData} setUserData={setUserData} />
        <TokenTransferBox
          className="mt-[59px]"
          userData={userData}
          setUserData={setUserData}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
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
