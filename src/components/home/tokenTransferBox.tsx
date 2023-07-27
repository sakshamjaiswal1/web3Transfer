import { IUserData } from "../../interfaces/userData.interface";
import Button from "../common/button";
import InputField from "../common/inputField";

function TokenTransferBox({
  className = "",
  userData,
  setUserData,
}: {
  userData: IUserData;
  setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
  className: string;
}) {
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
        />
        <InputField
          label="EToken Amount"
          placeHolder="Enter Token Amount"
          isFullWidth
          value={userData.amount}
          onChange={(value) =>
            setUserData({ ...userData, amount: parseFloat(value) })
          }
        />
        <div>
          <Button title="Transfer" onClick={() => {}} isDisabled />
        </div>
      </form>
    </div>
  );
}

export default TokenTransferBox;
