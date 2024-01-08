import SidePanel from "./components/sidePanel";
import WelcomeHeader from "./components/welcomeHeader";

const layout = ({ children }) => {
  return (
    <div className="flex gap-5 w-screen h-screen overflow-hidden p-7 pl-0 pb-0">
      <SidePanel />
      <div className="flex gap-5 flex-col">
        <WelcomeHeader />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
