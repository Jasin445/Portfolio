import Footer from "@/components/Footer";
import { PropsWithChildren } from "react";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
