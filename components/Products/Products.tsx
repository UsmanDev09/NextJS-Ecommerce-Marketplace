import Image from "next/image";

import startIcon from "../../public/images/star.png";
import addIcon from "../../public/images/add.svg";

const Products = ({addToCart, hideCategoryName, categoryName, products, width, height, gap}: any) => {
  console.log(addToCart, hideCategoryName, categoryName, products, width, height, gap)
  return (
    <div>
      <div className="flex flex-wrap mt-10">
        <div className={``}>
          {!hideCategoryName && (
            <div className="flex pl-14">
              <h1 className="text-3xl mb-4 font-unica w-[80%] uppercase">
                {categoryName}
              </h1>
              <br />
            </div>
          )}
          <div
            className={`flex flex-wrap ${
              gap && `gap-x-[${gap}px], justify-start pl-10`    //generic
            }`}
          >

            {products  ? (
              Object.keys(products).map((product: any) => {
                return (
                  <div
                    key={products[product].id}
                    className="lg:w-auto md:w-auto p-4 w-full"
                  >
                    <div className="rounded-xl">
                      <div className={`bg-[url(/images/default-image.jpg)] bg-no-repeat bg-cover bg-center  items-end rounded-xl ${width === 360 && 'w-[360px]'} ${width === 271 && 'w-[271px]'} ${height === 260 && 'h-[260px]'} ${height === 220 && 'h-[220px]'} `}>
                        <div className={`flex justify-between h-[95%] mr-2 ml-2 items-end`}>
                          <div className="flex items-center justify-center bg-[#F5F8FA] w-[62px] h-[34px] ">
                            <Image src={startIcon} alt={"Icon"} width={16} height={16}/>
                            <p className="ml-2 font-comfortaa text-[12px] text-[#1C1F22]">
                              4.6
                            </p>
                          </div>
                          <button>
                            <Image
                              onClick={() =>
                                addToCart("2", "", 1, 250, "UNIGMA")
                              }
                              src={addIcon}
                              alt={"Icon"}
                              className="rounded-full"
                              width={40}
                              height={40}
                            />
                          </button>
                        </div>
                      </div>
                      <p className="font-comfortaa mt-[20px]">{products[product].name}</p>
                      <p className="font-thin font-comfortaa text-[#687B8B] mt-[12px]">
                        Name of selling party
                      </p>
                      <p className="font-unica text-[30px] text-[#1C1F22] mt-[12px] after:content-['0'] after:text-[16px] after:absolute after:mt-2 after:font-unica ">
                        ${products[product].price}.
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="font-comfortaa mt-4 text-[16px]">No Products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
