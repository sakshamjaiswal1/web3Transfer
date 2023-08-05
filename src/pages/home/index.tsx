import { useState } from "react";
import Footer from "../../components/common/footer";
import Header from "../../components/common/header";
import TokenBalanceBox from "../../components/home/tokenBalanceBox";
import TokenTransferBox from "../../components/home/tokenTransferBox";
import { IUserData } from "../../interfaces/userData.interface";
import useTokenTransfer from "../../hooks/useTokenTransfer";

function Home() {
  const [userData, setUserData] = useState<IUserData>({
    senderAddress: "",
    receiverAdress: "",
    amount: 0,
  });
  useTokenTransfer();

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
