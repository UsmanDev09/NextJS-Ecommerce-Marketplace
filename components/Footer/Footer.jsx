import Image from "next/image";
import { useRouter } from "next/router";

import Logo from "../../public/images/logo_black.png";

const Footer = () => {
  const router = useRouter();
  return (
    <footer
      className={`bg-black w-full text-gray-600 body-font p-5 mt-[120px]
      ${router.pathname === ("/auth/login" || "/auth/register") ? "hidden" : "block"}`}
    >
      <div className="flex flex-wrap justify-between">
        <div className="flex">
        <Image
          src={Logo}
          width={235}
          height={40}
          alt="logo"
          className=""
        ></Image>
        </div>
        <div className="flex">
        <Image
          src="/images/twitter.svg"
          width={39}
          height={39}
          alt="twitter"
          className="xs:m;-0 md:ml-10 mr-5"
        ></Image>
        <Image
          src="/images/tik_tok.svg"
          width={39}
          height={39}
          alt="twitter"
          className=" mr-5"
        ></Image>
        <Image
          src="/images/twitch.svg"
          width={39}
          height={39}
          alt="twitter"
          className=" mr-5"
        ></Image>
        <Image
          src="/images/instagram.svg"
          width={39}
          height={39}
          alt="twitter"
          className=" mr-5"
        ></Image>
        <Image
          src="/images/pinterest.svg"
          width={39}
          height={39}
          alt="twitter"
          className=" mr-5"
        ></Image>
        </div>
      </div>
      <div className="flex flex-wrap mt-10  text-white sm:flex-col xl:flex-row">
        <p className="mr-5 font-comfortaa_bold text-base">Help Center</p>
        <p className="mr-5 font-comfortaa_bold text-base">Contact Us</p>
        <p className="mr-5 font-comfortaa_bold text-base">Invester Relations</p>
        <p className="mr-5 font-comfortaa_bold text-base">Terms of Services</p>
        <p className="mr-5 font-comfortaa_bold text-base">Return Policy</p>
        <p className="mr-5 font-comfortaa_bold text-base">Prohibited Items</p>
      </div>
    </footer>
  );
};

export default Footer;
