import heroBg from "../../public/assets/images/heroBg.webp";
import Image from "next/image";

const HeroBg = () => {
  return (
    <>
      <div className=" sm:w-[65%] w-[100%] h-full absolute right-0 ">
        <Image src={heroBg} fill />
      </div>
      <div className="w-full h-screen absolute bg-gradient-to-r from-primary from-0% via-primary via-35% to-primary/70 "></div>
    </>
  );
};

export default HeroBg;
