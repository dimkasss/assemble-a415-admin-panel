import UserInfoButton from "@/components/UserInfoButton";

interface MainContentLayoutProps {
  children: React.ReactNode;
}

const MainContentLayout: React.FC<MainContentLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <div className="absolute right-0 top-0 h-full">
        <UserInfoButton />
      </div>
    </>
  );
};

export default MainContentLayout;
