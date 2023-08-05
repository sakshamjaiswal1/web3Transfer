import useTokenTransfer from "../../hooks/useTokenTransfer";
import { IUserData } from "../../interfaces/userData.interface";
import Button from "../common/button";
import InputField from "../common/inputField";
import "./index.css";

function TokenBalanceBox({
  className = "",
  userData,
  setUserData,
}: {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  className?: string;
}) {
  const { getErc20TokenBalance } = useTokenTransfer();

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
          value={userData.senderAddress}
          onChange={(value) =>
            setUserData({ ...userData, senderAddress: value })
          }
        />
        <div>
          <Button
            title="Submit"
            onClick={() => getErc20TokenBalance(userData.senderAddress)}
          />
        </div>
      </form>
    </div>
  );
}

export default TokenBalanceBox;
