import Image from "next/image";

import arrowIcon from "../../public/images/right-arrow.png";

const ExploreCategories = () => {
  return (
    <>

      <div className="pl-3">
        <div className="flex justify-center">
          <h1 className="text-4xl  pt-16 font-unica w-[95%] ">
            EXPLORE THE PRODUCTS BY CATEGORIES
          </h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center ">
          <div className="bg-[url(/images/multiverse.png)] bg-no-repeat xs:w-[360px] xs:h-[360px] md:w-[500px]  bg-contain md:h-[580px] mt-14 p-8">
            <h1 className="text-white text-2xl font-unica"> MULTIVERSE</h1>
            <button className="text-white font-thin  mt-4 pt-3  rounded-lg ">
              <div className="flex">
                <p className="text-[#F5F8FA] font-comfortaa text-[16px]"> Explore the best deals </p>
                <Image
                  src={arrowIcon}
                  height={20}
                  width={20}
                  className="ml-2"
                  alt="arrowIcon"
                ></Image>
              </div>
            </button>
          </div>
          <div className=" flex flex-wrap items-center pt-12 justify-center">
            <div className="p-4">
              <div className="bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[260px]  xs:w-[400px] md:w-[500px] p-8  mb-10">
                <h1 className="text-white text-2xl font-unica">AWARA</h1>
                <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                  <div className="flex">
                    <p className="text-[#F5F8FA] font-comfortaa text-[14px]">Check it out</p>
                    <Image
                      src={arrowIcon}
                      height={20}
                      width={20}
                      className="ml-2"
                      alt="arrowIcon"
                    ></Image>
                  </div>
                </button>
              </div>


              <div className="bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[260px]  xs:w-[400px] md:w-[500px] p-8 m-auto">
                <h1 className="text-white text-2xl font-unica">LU</h1>
                <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                  <div className="flex">
                    <p className="text-[#F5F8FA] font-comfortaa text-[14px]">Check it out</p>
                    <Image
                      src={arrowIcon}
                      height={20}
                      width={20}
                      className="ml-2"
                      alt="arrowIcon"
                    ></Image>
                  </div>
                </button>
              </div>
            </div>
            <div className="p-4 pt-6">
              <div className="bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[260px]  xs:w-[400px] md:w-[500px] p-8 m-auto mb-10">
                <h1 className="text-white text-2xl font-unica">ASTRO</h1>
                <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                  <div className="flex">
                    <p className="text-[#F5F8FA] font-comfortaa text-[14px]">Check it out</p>
                    <Image
                      src={arrowIcon}
                      height={20}
                      width={20}
                      className="ml-2"
                      alt="arrowIcon"
                    ></Image>
                  </div>
                </button>
              </div>

              <div className="bg-[url(/images/magia.png)] bg-no-repeat bg-contain h-[260px]  xs:w-[400px] md:w-[500px] p-8 m-auto p-8">
                <h1 className="text-white text-2xl font-unica">MAGNA</h1>
                <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                  <div className="flex">
                    <p className="text-[#F5F8FA] font-comfortaa text-[14px]">Check it out</p>
                    <Image
                      src={arrowIcon}
                      height={20}
                      width={20}
                      className="ml-2"
                      alt="arrowIcon"
                    ></Image>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCategories;
