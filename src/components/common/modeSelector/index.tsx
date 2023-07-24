import lightButton from "../../../assets/light-button.svg";
import "./index.css";

function ModeSelector() {
  return (
    <div className="rounded-[90px]  flex items-center justify-center bg-[#E9EAF0]">
      <img src={lightButton} alt="" className="h-[20px] w-[20px] m-[6px]" />
    </div>
  );
}

export default ModeSelector;
