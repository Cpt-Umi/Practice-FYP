import React from "react";
import { useDisconnect } from "wagmi";
import { useRouter } from "next/router";

const Distributor = () => {
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const handler = () => {
    disconnect();
    router.push("/");
  };
  return (
    <div>
      <div>Distributor</div>
      <button onClick={handler}>Disconnect</button>
    </div>
  );
};

export default Distributor;
