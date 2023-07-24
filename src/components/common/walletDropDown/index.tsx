import dropDownLogo from "../../../assets/dropDownLogo.svg";
import downArrowBlack from "../../../assets/down-arrow-black.svg";

function WalletDropdown({ className }: { className?: string }) {
  return (
    <div
      className={`border-[1px] border-solid border-[#E7ECEF] rounded-[90px] flex items-center gap-x-[10px] pl-[5px] pr-[10px] py-[5px] ${className}`}
    >
      <img src={dropDownLogo} alt="" className="h-[24px] w-[24px]" />
      0
      <img src={downArrowBlack} alt="" className="w-[14px] h-[8px]" />
    </div>
  );
}

export default WalletDropdown;
