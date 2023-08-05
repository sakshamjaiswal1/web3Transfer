import logoGreenFull from "../../../assets/logo-green-full.svg";
import redirectIcon from "../../../assets/redirect.svg";
import downArrowBlack from "../../../assets/down-arrow-black.svg";
import Button from "../button";
import WalletDropdown from "../walletDropDown";
import ModeSelector from "../modeSelector";
import ThreeDots from "../threeDots";
import sun from "../../../assets/sun.svg";

import { addressShrinker } from "../../../utils/addressShrinker";
import { Id } from "react-toastify";

function Header({
  currentWalletAddress,
  connectWallet,
  isConnectLoading,
}: {
  currentWalletAddress: string;
  connectWallet: () =>  Promise<Id | undefined>;
  isConnectLoading: boolean;
}) {
  return (
    <header className="flex justify-center items-center py-[18.6px]">
      <div>
        <img
          src={logoGreenFull}
          alt=""
          className="h-[32px] w-[32px] cursor-pointer"
        />
      </div>
      <nav className="pl-[20px]">
        <ul className="flex items-center justify-center gap-x-[25px]">
          <li className="typo-nav-active text-nav-normal-text cursor-pointer">
            Home
          </li>
          <li className="typo-nav-normal text-nav-normal-text flex items-center gap-x-[7.5px] cursor-pointer">
            <span>Demeter</span>{" "}
            <img src={redirectIcon} alt="" className="h-[18px] w-[18px]" />
          </li>
          <li className="typo-nav-normal text-nav-normal-text cursor-pointer">
            Guage
          </li>
          <li className="typo-nav-normal text-nav-normal-text cursor-pointer">
            Stake
          </li>
          <li className="typo-nav-normal text-nav-normal-text cursor-pointer">
            Buyback
          </li>
          <li className="typo-nav-normal text-nav-normal-text cursor-pointer">
            Swap
          </li>
          <li className="typo-nav-normal text-nav-normal-text flex items-center gap-x-[6px] cursor-pointer ">
            {" "}
            <span>More</span>{" "}
            <img
              src={downArrowBlack}
              alt=""
              className="h-[16px] w-[16px] mt-[2px]"
            />
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-[19px] pl-[30px]">
        <img src={sun} alt="" className="h-[13px] w-[13px]" />
        <Button title="Buy SPA & USDs" onClick={() => {}} />
        <WalletDropdown />
        <Button
          title={`${
            currentWalletAddress !== ""
              ? addressShrinker(currentWalletAddress)
              : "Connect wallet"
          }`}
          onClick={() => {
            if (!currentWalletAddress) {
              connectWallet();
            }
          }}
          isLoading={isConnectLoading}
        />
        <ModeSelector />
        <ThreeDots />
      </div>
    </header>
  );
}

export default Header;
