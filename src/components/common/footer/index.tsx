import FooterButton from "./footerButton";
import "./index.css";
import footerLogoGrey from "../../../assets/footer-logo-grey.svg";
import discordLogo from "../../../assets/footer/discorLogo.svg";
import twitterLogo from "../../../assets/footer/twitter.svg";
import dmLogo from "../../../assets/footer/dm.svg";
import githubLogo from "../../../assets/footer/github.svg";
import otherLogo from "../../../assets/footer/other.svg";

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
            <img src={discordLogo} alt="" className="h-[17px] w-[23px]" />
            <img src={twitterLogo} alt="" className="h-[19px] w-[23px]" />
            <img src={dmLogo} alt="" className="h-[19px] w-[23px]" />
            <img src={githubLogo} alt="" className="h-[20px] w-[21px]" />
            <img src={otherLogo} alt="" className="h-[16px] w-[28px]" />
          </div>
        </div>
        <div className="flex  w-full items-center justify-between ">
          <p>© 2023 Sperax Inc. All rights reserved.</p>
          <div>
            <p>Terms of Service</p> <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
