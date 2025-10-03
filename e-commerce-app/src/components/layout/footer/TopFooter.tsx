import { Link } from "react-router-dom";
import { footerItems } from "../../../constant";
import type { IFooterGroup } from "../../../types";

const FooterGroup: React.FC<IFooterGroup> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-2xl text-[#FAFAFA] ">{title}</h3>
      <ul className="flex flex-col gap-4 text-[#FAFAFA] list-none">
        {items.map((item) => (
          <li key={item.id} className="md:max-w-[217px]">
            {typeof item.title === "string" ? (
              <Link to={item.Link}>{item.title}</Link>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TopFooter = () => {
  return (
    <div className="container flex justify-between py-10 flex-col md:flex-row gap-10">
      {footerItems.map((item) => (
        <FooterGroup {...item} key={item.title} />
      ))}
    </div>
  );
};

export default TopFooter;
