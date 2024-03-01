import { FaDharmachakra, FaRegCopyright } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { PiNutBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="w-16 min-h-screen">
        <div className="font-coolvetica flex flex-col fixed content-start h-screen bg-primary text-secondary w-16 justify-items-center  top-0 left-0 shadow-lg z-20">
          <SideBarIcon
            flink={"/"}
            icon={<IoMdHome size="28" />}
            text={"Home"}
          />
          <hr className="sidebar-hr" />
          <SideBarIcon
            flink={"/Projects"}
            icon={<FaDharmachakra size="28" />}
            text={"Projects"}
          />
          <SideBarIcon
            flink={"/Service"}
            icon={<PiNutBold size="28" />}
            text={"Services"}
          />
          <hr className="sidebar-hr" />
          <SideBarIcon
            flink={"/About"}
            icon={<TbListDetails size="28" />}
            text={"About"}
          />
          <SideBarIcon
            icon={<FaRegCopyright size="28" />}
            text={"Adheera"}
            cop={"cop"}
            flink={"https://dheeraj.sahani.dev"}
          />
        </div>
      </div>
    </>
  );
};

const SideBarIcon = ({ icon, text, cop, flink }) => (
  <Link to={flink}>
    <div className={`sidebar-icon pointer-events-auto group ${cop} `}>
      {icon}
      <span className="sidebar-text group-hover:scale-100 group-hover:z-50 ">
        {text}
      </span>
    </div>
  </Link>
);
export default SideBar;
