import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import SearchBar from "../SearchBar/SearchBar";
import whiteLogo from "../../public/images/logo_black.png";
import blackLogo from "../../public/images/bg_black_logo.png";
import shoppingCartIcon from "../../public/images/shopping-cart.svg";
import Category from "../Dropdowns/Category";
import Cart from "../Cart/Cart";
import * as path from "../../constants/paths";

import profileIcon from '../../public/images/profile.svg'

export const Navbar = (props: any) => {
  const [cartClicked, setCartClicked] = useState(false);
  const [isSignOut, setIsSignOut] = useState(false);
  const [yScroll, setYScroll] = useState(0);

  const session = useSession();
  const router = useRouter();

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      setYScroll(window.scrollY);
    },
    [yScroll]
  );

  useEffect(() => {

    setYScroll(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };

  }, [handleNavigation]);

  useEffect(() => {

    if(localStorage.getItem("token"))
      setIsSignOut(false);

  }, [isSignOut]);

  const loggedInContent = (
    <>
      <Link
        href={`${path.LOGIN}`}
        className={`flex justify-between items-center text-[16px] font-unica border-gray-100 hover:bg-gray-50 md:hover:bg-transparent xs:hidden lg:flex ${
          yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-[#1C1F22]"
        }`}
      >
        <button
          onClick={(e) => {
            localStorage.removeItem("cart");
            localStorage.removeItem("token");
            setIsSignOut(true);
          }
        }>
          SIGN OUT
        </button>
      </Link>
      <hr className={`border-[1px] h-10 xs:order-6 md:order-[0]
      ${yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "bg-[#1C1F22]"
            : "bg-[#F5F8FA]"
        }`}/>
      <Link
        href={`${path.PROFILE}`}
        className={`flex justify-between items-center text-[16px] font-unica no-underline  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ${
          yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-[#1C1F22]"
        }`}
      >
        <Image src={profileIcon} alt="profile icon" className="rounded-full" width={32} height={32}></Image>
      </Link>
      <Cart
        props={props}
        cartClicked={cartClicked}
        setCartClicked={(clicked: boolean) => setCartClicked(clicked)}
      />
    </>
  );

  const notLoggedInContent = (
    <>
      <Link
        href={`${path.LOGIN}`}
        className={` font-unica hover:text-black text-[16px] rounded-lg text-sm focus:text-black ${
          yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-[#1C1F22]"
        }`}
      >
        LOGIN
      </Link>
      <Link
        href="#"
        className={` hover:text-black font-unica text-[16px] rounded-lg text-sm  focus:text-black dark:focus:ring-blue-800 ${
          yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
            ? "text-[#1C1F22] hover:text-[#636464]"
            : "text-[#F5F8FA] hover:text-[#1C1F22]"
        }`}
      >
        Sign up
      </Link>
      <hr className="border-[1px] h-10 bg-[#F5F8FA]"/>
      <Cart
        props={props}
        cartClicked={cartClicked}
        setCartClicked={(clicked: boolean) => setCartClicked(clicked)}
      />
    </>
  );

  return (
    <nav
      className={`absolute w-full top-0 z-10  border-b border-gray-200 xs:px-5  py-4
      ${
        yScroll > 722 || router.pathname !== `${path.HOMEPAGE}`
          ? "bg-[#F5F8FA]"
          : "backdrop-filter backdrop-blur-lg"
      }
      ${router.pathname === (`${path.LOGIN}` || `${path.REGISTER}`) ? "hidden" : "block"}`}
    >
      <div className=" flex flex-wrap items-center xs:justify-center md:justify-between lg:pt-0 max-w-screen-3xl">
        <div className="flex h-10 items-center xs:order-1 xs:mr-auto md:m-0">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {yScroll < 722 && router.pathname === `${path.HOMEPAGE}` ? (
                <Image src={whiteLogo} width={140} height={10} alt="logo" />
              ) : (
                <Image src={blackLogo} width={150} height={10} alt="logo" />
              )}
            </span>
          </a>
        </div>
        <div className="xs:order-3 lg:pb-0 md:order-2">
          <SearchBar
            categories={props.categories}
            addToCart={props.addToCart}
            yScroll={yScroll}
            path={router.pathname}
            searchHandler={(searchItem: any, categoryId: any) =>
              props.searchHandler(searchItem, categoryId)
            }
          />
        </div>
        <div
          id="mega-menu-icons"
          className="w-full flex xs:w-auto xs:ml-auto md:m-0 xs:order-2 md:order-3"
        >
          <button
              data-collapse-toggle="mega-menu-icons"
              type="button"
              className="sm:flex xs:order-2  md:order-1 lg:hidden items-center pt-2 pb-2 ml-0 text-sm text-white rounded-lg  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mega-menu-icons"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="w-9 h-8 hover:bg-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          <ul className="flex items-center justify-between text-sm font-medium xs:w-[100px] lg:w-[300px] xs:order-1 md:order-2">
            <Category
              path={router.pathname}
              yScroll={yScroll}
              categories={props.categories}
            />

            {/* <Languages /> */}

            {!isSignOut ? (
              <> {loggedInContent} </>
            ) : (
              <> {notLoggedInContent} </>
            )}

            <div
              onClick={() => setCartClicked(!cartClicked)}
              className="text-gray-800  rounded-full"
            >
              <Image
                src={shoppingCartIcon}
                width={32}
                height={32}
                alt="Icon"
                className=" cursor-pointer rounded-full"
              />
            </div>

          </ul>
        </div>
      </div>
    </nav>
  );
};
