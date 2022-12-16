import { useRouter } from "next/router"
import Image from "next/image"

import startIcon from "../../public/images/star.svg"
import addIcon from "../../public/images/add.svg"
import searchIcon from '../../public/images/search.png'
import ExploreCategories from "../Categories/ExploreCategories"

import styles from "../../styles/LandingPage.module.css"
import Products from "../Products/Products"

const LandingPage = ({addToCart, categories}:any) => {
  const router = useRouter()
  return (
    <>
      <div>
        <div className="bg-[url(/images/hero_bck.png)] bg-no-repeat relative lg:top-[-180px] sm:top-[-250px] xs:top-[-280px] xs:h-[110vh] md:h-screen bg-[100%] bg-cover">
          <div className="">
            <div className="  h-[146px] p-20 pl-5 relative xs:top-80 md:top-64">
              <h1 className={`text-[#F5F8FA] tracking-normal  leading-[73px] xs:text-[40px] sm:text-[62px]  items-center font-unica ${styles.textShadow}`}>
                THE BEST PRODUCTS IN THE GALAXY.
              </h1>
              <button className="text-white font-thin border-white bg-gradient-to-r from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.1)] mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                <div className="flex items-center">
                  <Image src={searchIcon} alt="add"  className="bg-transparent mr-2"/>
                  <p className="font-comfortaa text-[#F5F8FA] text-[14px]">Explore the Best Deals</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-auto justify-center xs:mt-[-200px] md:mt-[-130px] mb-[120px]">
          <ExploreCategories />
        </div>

        {categories ?
            categories.map((category: any) => {
              console.log("Cat", category[Object.keys(category)[0]]);
              return (
                <>
                  <div key={category.categoryId}></div>
                  {Object.keys(category) !== null && (
                    <div>
                      <Products
                        hideCategoryName={false}
                        categoryName={category[Object.keys(category)[0]].name}
                        products={
                          category[Object.keys(category)[0]].products !== null ? category[Object.keys(category)[0]].products : []
                        }
                        width={360}
                        height={260}
                        gap={60}
                      />
                    </div>
                  )}
                </>
              );
            }) : <p className="mt-16 ml-10 font-comfortaa"> No Products are available </p>}
      </div>
    </>
  )
}

export default LandingPage
