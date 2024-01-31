import { FaDharmachakra, FaRegCopyright } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { PiNutBold } from "react-icons/pi";
const SideBar = () => {
  return (
    <>
      <div className="flex flex-col content-start h-screen bg-primary text-secondary w-16 justify-items-center m-0">
        <SideBarIcon icon={<IoMdHome size="28" />} text={"Home"} />
        <SideBarIcon icon={<FaDharmachakra size="28" />} text={"Projects"} />
        <SideBarIcon icon={<PiNutBold size="28" />} text={"Services"} />
        <SideBarIcon icon={<TbListDetails size="28" />} text={"About"} />
        <SideBarIcon
          icon={<FaRegCopyright size="28" />}
          text={"Adheera"}
          cop={"cop"}
        />
      </div>
    </>
  );
};

const SideBarIcon = ({ icon, text, cop }) => (
  <div className={`sidebar-icon group ${cop} `}>
    {icon}
    <span className="sidebar-text group-hover:scale-100">{text}</span>
  </div>
);
export default SideBar;
