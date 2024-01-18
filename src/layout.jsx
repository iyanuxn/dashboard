import SidePanel from "./components/sidePanel";
import WelcomeHeader from "./components/welcomeHeader";

const layout = ({ children }) => {
  return (
    <div className="flex gap-5 w-screen h-screen overflow-hidden pt-10 pr-10">
      <SidePanel />
      <div className="flex gap-5 flex-col w-full">
        <WelcomeHeader />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
