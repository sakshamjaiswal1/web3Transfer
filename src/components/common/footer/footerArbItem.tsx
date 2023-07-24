import copyLogo from "../../../assets/copy.svg";
import redirect from "../../../assets/redirect.svg";
import downArrowBlack from "../../../assets/down-arrow-black.svg";

function footerArbItem({
  title,
  imageUrl,
  issDownArrow,
}: {
  title: string;
  imageUrl: string;
  issDownArrow?: boolean;
}) {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <p className="" >{title}</p>
      {issDownArrow && (
        <img src={downArrowBlack} alt="" className="w-[14px] h-[8px]" />
      )}
      <img src={redirect} alt="" className="h-[18px] w-[18px]" />
      <img src={copyLogo} alt="" className="h-[18px] w-[18px]" />
    </div>
  );
}

export default footerArbItem;
