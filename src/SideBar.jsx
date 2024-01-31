import {
  FaDeviantart,
  FaDharmachakra,
  FaDiscord,
  FaFire,
  FaGitlab,
} from "react-icons/fa6";
const SideBar = () => {
  return (
    <div className="flex flex-col fixed h-screen bg-primary text-secondary w-16 justify-items-center m-0">
      <SideBarIcon icon={<FaDeviantart size="28" />} />
      <SideBarIcon icon={<FaDharmachakra size="28" />} />
      <SideBarIcon icon={<FaDiscord size="28" />} />
      <SideBarIcon icon={<FaGitlab size="28" />} />
      <SideBarIcon icon={<FaFire size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "hi Adheera" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-text group-hover:scale-100">{text}</span>
  </div>
);
export default SideBar;
