import React from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/router";

const Manufacturer = () => {
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const handler = () => {
    disconnect();
    router.push("/");
  };
  return (
    <div>
      <div>Manufacturer</div>
      <button onClick={handler}>Disconnect</button>
    </div>
  );
};

export default Manufacturer;
