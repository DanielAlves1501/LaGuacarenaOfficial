import Image from "next/image";
import logo from "../../public/logo.png";

const Logo = ({ buttons }) => {
  return (
    <div
      className={`${
        !buttons ? "block" : "hidden"
      } sm:block max-w-[130px] w-full min-w-[90px] `}
    >
      <Image
        src={logo}
        width="100%"
        height="100%"
        alt="Asados La Guacarena Logo"
      />
    </div>
  );
};

export default Logo;
