import { useEffect, useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TokenBalanceBox from "../../components/home/tokenBalanceBox";
import TokenTransferBox from "../../components/home/tokenTransferBox";
import { IUserData } from "../../interfaces/userData.interface";
import useTokenTransfer from "../../hooks/useTokenTransfer";
import TokenBalanceDisplayBox from "../../components/home/tokenBalanceDisplayBox";
import { Fade } from "@mui/material";

function Home() {
  const [userData, setUserData] = useState<IUserData>({
    ercContractAddress: "",
    receiverAdress: "",
    amount: 0,
  });
  const {
    connectWallet,
    isConnectLoading,
    getErc20TokenBalance,
    currentWalletAddress,
    tokenBalance,
    handleTransferToken,
    isTransferLoading,
  } = useTokenTransfer();

  useEffect(() => {
    connectWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full">
      <Header
        currentWalletAddress={currentWalletAddress}
        connectWallet={connectWallet}
        isConnectLoading={isConnectLoading}
      />
      <div className=" bg-white  min-h-[calc(100vh-465px)] h-full my-[80px]">
        <TokenBalanceBox
          userData={userData}
          setUserData={setUserData}
          tokenBalance={tokenBalance}
          getErc20TokenBalance={getErc20TokenBalance}
        />

        <Fade in={tokenBalance.isDisplay} mountOnEnter unmountOnExit>
          <div className="w-full h-full">
            <TokenBalanceDisplayBox
              className="mt-[24px]"
              tokenBalance={tokenBalance}
            />
          </div>
        </Fade>

        <TokenTransferBox
          className="mt-[59px]"
          userData={userData}
          setUserData={setUserData}
          tokenBalance={tokenBalance}
          handleTransferToken={handleTransferToken}
          isTransferLoading={isTransferLoading}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
