import { FaDharmachakra, FaRegCopyright } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { PiNutBold } from "react-icons/pi";
import Parallax from "./Parallax";
const SideBar = () => {
  return (
    <>
      <div className="flex flex-col fixed content-start h-screen bg-primary text-secondary w-16 justify-items-center  top-0 left-0 shadow-lg">
        <SideBarIcon icon={<IoMdHome size="28" />} text={"Home"} />
        <hr className="sidebar-hr" />
        <SideBarIcon icon={<FaDharmachakra size="28" />} text={"Projects"} />
        <SideBarIcon icon={<PiNutBold size="28" />} text={"Services"} />
        <hr className="sidebar-hr" />
        <SideBarIcon icon={<TbListDetails size="28" />} text={"About"} />
        <SideBarIcon
          icon={<FaRegCopyright size="28" />}
          text={"Adheera"}
          cop={"cop"}
        />
      </div>
      <Parallax />
    </>
  );
};

const SideBarIcon = ({ icon, text, cop }) => (
  <div className={`sidebar-icon group ${cop} `}>
    {icon}
    <span className="sidebar-text group-hover:scale-100 group-hover:z-50 ">
      {text}
    </span>
  </div>
);
export default SideBar;
