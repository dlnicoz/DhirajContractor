import {
  FaDeviantart,
  FaDharmachakra,
  FaDiscord,
  FaFire,
  FaGitlab,
} from "react-icons/fa6";
const SideBar = () => {
  return (
    <>
      <div className="flex flex-col fixed h-screen bg-primary text-secondary w-16 justify-items-center m-0">
        <SideBarIcon icon={<FaDeviantart size="28" />} text={"Home"} />
        <SideBarIcon icon={<FaDharmachakra size="28" />} text={"Projects"} />
        <SideBarIcon icon={<FaDiscord size="28" />} text={"About"} />
        <SideBarIcon icon={<FaGitlab size="28" />} text={"Copy "} />
        <SideBarIcon cop={"cop"} icon={<FaFire size="28" />} text={"Adheera"} />
      </div>
    </>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className={`sidebar-icon group `}>
    {icon}
    <span className="sidebar-text group-hover:scale-100">{text}</span>
  </div>
);
export default SideBar;
