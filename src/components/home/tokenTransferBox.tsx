import { useState } from "react";
import { IUserData } from "../../interfaces/userData.interface";
import Button from "../common/button";
import InputField from "../common/inputField";
import { addressValidator } from "../../utils/addressShrinker";

function TokenTransferBox({
  className = "",
  userData,
  setUserData,
  tokenBalance,
  handleTransferToken,
  isTransferLoading,
}: {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  className: string;
  tokenBalance: {
    value: number;
    isDisplay: boolean;
    isLoading: boolean;
  };
  handleTransferToken: (
    ethContractAddress: string,
    recieverAddress: string,
    amount: number
  ) => Promise<void>;
  isTransferLoading: boolean;
}) {
  const [isAmountError, setIsAmountError] = useState<boolean>(false);
  const [isAddressError, setIsAddessError] = useState<boolean>(false);

  return (
    <div className={`max-w-[540px] w-full mx-auto mt-[80px] ${className}`}>
      <h4 className="typo-heading text-[#000] text-center">
        ERC20 Token Balance
      </h4>
      <form
        action=""
        className="flex flex-col  gap-y-[20px] mt-[15px] bg-[#F4F6F8] rounded-[12px] form-box-shadow py-[20px] px-[20px] w-full"
      >
        <InputField
          label="Recipient's Ethereum Address"
          placeHolder="Enter Recipient's Ethereum Address"
          isFullWidth
          value={userData.receiverAdress}
          onChange={(value) =>
            setUserData({
              ...userData,
              receiverAdress: value,
            })
          }
          onFocus={() => setIsAddessError(false)}
        />
        {isAddressError && (
          <p className={`typo-input-error text-error`}>
            Please enter a wallet token address
          </p>
        )}
        <InputField
          type="number"
          label="EToken Amount"
          placeHolder="Enter Token Amount"
          isFullWidth
          value={userData.amount}
          onChange={(value) =>
            setUserData({ ...userData, amount: parseFloat(value) || 0 })
          }
          onFocus={() => setIsAmountError(false)}
        />
        {isAmountError && (
          <p className={`typo-input-error text-error`}>
            Please enter a valid amount
          </p>
        )}
        <div>
          <Button
            title="Transfer"
            onClick={() => {
              if (
                userData.amount === 0 ||
                tokenBalance.value < userData.amount
              ) {
                setIsAmountError(true);
              } else {
                setIsAmountError(false);
              }
              if (!addressValidator(userData.receiverAdress)) {
                setIsAddessError(true);
              } else {
                setIsAddessError(false);
              }
              if (
                userData.amount !== 0 &&
                tokenBalance.value > userData.amount &&
                addressValidator(userData.receiverAdress)
              ) {
                handleTransferToken(
                  userData.ercContractAddress,
                  userData.receiverAdress,
                  userData.amount
                );
              }
            }}
            isDisabled={!tokenBalance.isDisplay}
            isLoading={isTransferLoading}
          />
        </div>
      </form>
    </div>
  );
}

export default TokenTransferBox;
