import { Link } from "react-router-dom";
import { FacIcon, InstaIcon, LinkedinIcon, TwitterIcon } from "../../../icons";

const socialItems = [
  {
    id: "33",
    icon: <FacIcon />,
    link: "/",
  },
  {
    id: "44",
    icon: <TwitterIcon />,
    link: "/",
  },
  {
    id: "55",
    icon: <InstaIcon />,
    link: "/",
  },
  {
    id: "66",
    icon: <LinkedinIcon />,
    link: "/",
  },
];
const SocialGroup = () => {
  return (
    <div className="flex items-center gap-6">
      {socialItems.map((item) => (
        <Link to={item.link} key={item.id} className="text-xl text-white">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialGroup;
