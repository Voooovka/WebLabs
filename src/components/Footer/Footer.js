import React from "react";

import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import Logo from "../Logo/Logo";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-4 px-12 border-solid border-t-2 border-gray-300">
      <div>
        <p className="font-bold">Branding stuff</p>
        <p>2021 IoT © Copyright all rights reserved</p>
      </div>
      <div>
        <Logo />
      </div>
      <div className="flex">
        <FooterIcon icon={{ url: facebook, alt: "facebook" }} />
        <FooterIcon icon={{ url: instagram, alt: "instagram" }} />
        <FooterIcon icon={{ url: twitter, alt: "twitter" }} />
      </div>
    </div>
  );
};

export default Footer;
