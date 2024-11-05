import ActivitySection from "@/components/ActivitySection";
import UserInfoButton from "@/components/UserInfoButton";

interface MainContentLayoutProps {
  children: React.ReactNode;
}

const MainContentLayout: React.FC<MainContentLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Control Panel */}
      <ActivitySection />

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto mt-12 md:max-w-[70vw]">
        {children}
      </div>
      <UserInfoButton />
    </div>
  );
};

export default MainContentLayout;
