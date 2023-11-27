import React from "react";
import { WalletButton } from "@rainbow-me/rainbowkit";

const dashboard = () => {
  return (
    <div>
      <WalletButton wallet="metamask" />
      Hello
    </div>
  );
};

export default dashboard;
