import footerData from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp, IoHomeSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <>
      <div>
        <div className="bg-[#202020] text-white items-start px-32  flex flex-col gap-5 lg:grid lg:grid-cols-3 py-5">
          {footerData.map((data, index) => {
            const { icon, title, details } = data;
            return (
              <>
                <div
                  key={index}
                  className="flex justify-center items-center gap-3"
                >
                  <div className="text-blue-500 text-2xl">
                    {footerIcon[icon]}
                  </div>
                  <div>
                    <h2>{title}</h2>
                    <p>{details}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bg-black flex flex-wrap gap-3 justify-between items-center px-30 py-10">
          <div className="text-white">
            <p>Copyright &copy;, All rights reserved</p>
          </div>
          <div className="flex gap-5 text-2xl text-white">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <IoHomeSharp />
            </NavLink>
            <NavLink target="_blank" to="https://github.com/imihirjain">
              <BsGithub />
            </NavLink>
            <NavLink target="_blank" to="https://www.instagram.com/imihirjain/">
              <BsInstagram />
            </NavLink>
            <NavLink
              target="_blank"
              to="http://www.linkedin.com/in/mihir-jain-583633213"
            >
              <BsLinkedin />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
