
import { MobileProps } from "@/types";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileToggle: React.FC<MobileProps> = ({
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const handleToggleModal = () => {
    setIsMobileOpen!((prev) => !prev);
    console.log(isMobileOpen);
  };

  return (
    <main className="md:hidden cursor-pointer">
      <button onClick={handleToggleModal}>
        {isMobileOpen ? (
          <FaTimes size={25} />
        ) : (
          <FaBars size={25} />
        )}
      </button>
    </main>
  );
};

export default MobileToggle;
