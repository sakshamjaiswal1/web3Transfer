import FooterButton from "./footerButton";
import "./index.css";
import footerLogoGrey from "../../../assets/footer-logo-grey.svg";
import discordLogo from "../../../assets/footer/discorLogo.svg";
import twitterLogo from "../../../assets/footer/twitter.svg";
import dmLogo from "../../../assets/footer/dm.svg";
import githubLogo from "../../../assets/footer/github.svg";
import otherLogo from "../../../assets/footer/other.svg";
import FooterArbItem from "./footerArbItem";
import usdLogo from "../../../assets/usd_logo.svg";
import spaLogo from "../../../assets/spa_logo.svg";
import veSpaLogo from "../../../assets/veSpa_logo.svg";
import wspaLogo from "../../../assets/wspa_Logo.svg";
import mLogo from "../../../assets/m_logo.svg";
import birdLogo from "../../../assets/bird_logo.svg";
import swapLogo from "../../../assets/swap_logo.svg";
import bridgelogo from "../../../assets/bridge_logo.svg";
import rightArrow from "../../../assets/footer/right-arrow.svg";

function Footer() {
  return (
    <footer className="bg-[#F4F6F8] py-[40px] flex items-center justify-center w-full ">
      <div className="max-w-[1144px] w-full  ">
        <div className="flex  w-full items-center justify-between ">
          <div className="flex gap-x-[20px] items-center">
            <img src={footerLogoGrey} className="h-[32px] w-[32px]" alt="" />
            <FooterButton title="Forum" />
            <FooterButton title="Snapshot" />
          </div>
          <div className="flex items-center gap-x-[24px] ">
            <img
              src={discordLogo}
              alt=""
              className="h-[17px] w-[23px] cursor-pointer"
            />
            <img
              src={twitterLogo}
              alt=""
              className="h-[19px] w-[23px] cursor-pointer"
            />
            <img
              src={dmLogo}
              alt=""
              className="h-[19px] w-[23px] cursor-pointer"
            />
            <img
              src={githubLogo}
              alt=""
              className="h-[20px] w-[21px] cursor-pointer"
            />
            <img
              src={otherLogo}
              alt=""
              className="h-[16px] w-[28px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex  w-full items-start gap-x-[84px] h-full mt-[68px] mb-[55px]">
          <div className="flex flex-col justify-start">
            <FooterArbItem title="USDs Arbitrum" imageUrl={usdLogo} />
            <div className="mt-[32px] flex items-center gap-x-[18px]">
              <img src={mLogo} alt="" className="h-[24px] w-[24px]" />
              <img src={birdLogo} alt="" className="h-[24px] w-[24px]" />
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <FooterArbItem
              title="SPA Arbitrum"
              imageUrl={spaLogo}
              isDownArrow
            />
            <div className="mt-[32px] flex items-center gap-x-[18px]">
              <img src={mLogo} alt="" className="h-[24px] w-[24px]" />
              <img src={birdLogo} alt="" className="h-[24px] w-[24px]" />
            </div>
          </div>
          <div className="flex flex-col justify-start h-full">
            <FooterArbItem
              title="veSPA Arbitrum"
              imageUrl={veSpaLogo}
              isDownArrow
            />
          </div>
          <div className="flex flex-col justify-start">
            <FooterArbItem title="wSPA Ethereum" imageUrl={wspaLogo} />
            <p className="typo-footer-arb-text flex items-center mt-[32px] text-[#404b51]">
              {" "}
              <img
                src={swapLogo}
                alt=""
                className="h-[24px] w-[24px] mr-[10px]"
              />{" "}
              <span>SPA</span>{" "}
              <img
                src={rightArrow}
                alt=""
                className="h-[20px] w-[20px] mx-[8px]"
              />{" "}
              <span>wSPA</span>
            </p>
            <p className="typo-footer-arb-text flex items-center gap-x-[10px] mt-[16px] text-[#404b51]">
              <img src={bridgelogo} className="h-[24px] w-[24px]" alt="" />{" "}
              <span>Sperax- Arbitrum Bridge </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex  w-full items-center justify-between ">
          <p className="typo-footer-bottom-right text-[#ABB7BD] ">
            © 2023 Sperax Inc. All rights reserved.
          </p>
          <div className="flex items-center typo-footer-arb-text">
            <p className="mr-[15px]">Terms of Service</p>{" "}
            <p className="flex items-center gap-x-[12px]">
              {" "}
              <span className="rounded-[50%] h-[6px] w-[6px] bg-[#C8CFD3]" />
              <span>Privacy Policy</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
