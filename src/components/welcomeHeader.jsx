import { useState } from "react";
import UserMenu from "./userMenu";

const welcomeHeader = () => {
  const [name, setName] = useState("Thiccdaddy69");

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <span className="font-bold text-3xl tracking-tighter">
          Welcome back, {name}
        </span>
        <span className="text-neutral-400 text-sm">
          Here's what's happening with your store today.
        </span>
      </div>
      <div>
        <UserMenu name={name} />
      </div>
    </div>
  );
};

export default welcomeHeader;
