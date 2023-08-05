import { useState } from "react";
import { IUserData } from "../../interfaces/userData.interface";
import Button from "../common/button";
import InputField from "../common/inputField";
import "./index.css";
import { addressValidator } from "../../utils/addressShrinker";

function TokenBalanceBox({
  className = "",
  userData,
  setUserData,
  getErc20TokenBalance,
  tokenBalance,
}: {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  className?: string;
  getErc20TokenBalance: (ethContractAddress: string) => Promise<void>;
  tokenBalance: {
    value: number;
    isDisplay: boolean;
    isLoading: boolean;
  };
}) {
  const [isTokenError, setIstokenError] = useState<boolean>(false);

  return (
    <div className={`max-w-[540px] w-full mx-auto  ${className}`}>
      <h4 className="typo-heading text-[#000] text-center">
        ERC20 Token Balance
      </h4>
      <form
        action=""
        className="flex flex-col  gap-y-[20px] mt-[15px] bg-[#F4F6F8] rounded-[12px] form-box-shadow py-[20px] px-[20px] w-full"
      >
        <InputField
          label="Ethereum Address"
          placeHolder="Enter Ethereum address"
          isFullWidth
          value={userData.ercContractAddress}
          onChange={(value) =>
            setUserData({ ...userData, ercContractAddress: value })
          }
          onFocus={() => setIstokenError(false)}
        />
        <p
          className={`typo-input-error text-error ${
            isTokenError ? "block" : "invisible"
          }`}
        >
          Please enter a valid token address
        </p>
        <div>
          <Button
            title="Submit"
            onClick={() => {
              if (addressValidator(userData.ercContractAddress)) {
                setIstokenError(false);
                getErc20TokenBalance(userData.ercContractAddress);
              } else {
                setIstokenError(true);
              }
            }}
            isLoading={tokenBalance.isLoading}
          />
        </div>
      </form>
    </div>
  );
}

export default TokenBalanceBox;
