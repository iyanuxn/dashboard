import SidePanel from "./components/sidePanel";
import WelcomeHeader from "./components/welcomeHeader";

const layout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SidePanel />
      <div className="flex flex-col">
        <WelcomeHeader />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
