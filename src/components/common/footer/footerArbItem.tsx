import copyLogo from "../../../assets/copy.svg";
import redirect from "../../../assets/redirect.svg";
import downArrowBlack from "../../../assets/down-arrow-black.svg";

function FooterArbItem({
  title,
  imageUrl,
  isDownArrow,
  className = "",
}: {
  title: string;
  imageUrl: string;
  isDownArrow?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center ${className} text-[#404b51]`}>
      <img src={imageUrl} alt="" />
      <p className="pl-[10px] whitespace-nowrap typo-footer-arb-text">
        {title}
      </p>
      {isDownArrow && (
        <img
          src={downArrowBlack}
          alt=""
          className="w-[14px] h-[8px] ml-[12px]"
        />
      )}
      <img src={redirect} alt="" className="h-[18px] w-[18px] ml-[15px]" />
      <img src={copyLogo} alt="" className="h-[18px] w-[18px] ml-[17px]" />
    </div>
  );
}

export default FooterArbItem;
