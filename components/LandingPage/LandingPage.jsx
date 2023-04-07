import { useRouter } from "next/router"
import Image from "next/image"

import startIcon from "../../public/images/star.svg"
import addIcon from "../../public/images/add.svg"
import searchIcon from '../../public/images/search.png'
import ExploreCategories from "../Categories/ExploreCategories"
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import styles from "../../styles/LandingPage.module.css"
import Products from "../Products/Products"

const LandingPage = ({addToCart, categories, removeFromCart, subTotal, removeProductFromCart, clearCart}) => {
  const router = useRouter()

    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <>
        <div className="padding bg-primary flex items-center relative  h-[calc(100vh-100px)] bg-[100%] ">
          <div className="">
            <div className="m-auto">
              <h1 className={`text-secondary tracking-normal  leading-[73px] text-[40px] lg:text-[62px] md:text-[62px] sm:text-[62px]  items-center font-unica ${styles.textShadow}`}>
                THE BEST PRODUCTS IN THE GALAXY.
              </h1>
              <button className="text-secondary bg-secondary font-thin border-white mt-4 pt-3 pb-3 pl-5 pr-5 rounded-lg ">
                <div className="flex items-center ">
                  <Image src={searchIcon} alt="add"  className="bg-transparent mr-2"/>
                  <p className="font-comfortaa text-primary text-[14px]">Explore the Best Deals</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col h-auto justify-center ">
          <ExploreCategories />
        </div> */}

        {categories ?
            categories.slice(0,3).map((category) => {
              return (
                <div className='mb-10'>
                  <div key={category.categoryId}></div>

                  {Object.keys(category) !== null && (

                      <Products
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        removeProductFromCart={removeProductFromCart}
                        clearCart={clearCart}
                        subTotal={subTotal}
                        hideCategoryName={false}
                        categoryName={category[Object.keys(category)[0]].name}
                        products={
                          category[Object.keys(category)[0]].products !== null ? category[Object.keys(category)[0]].products : []
                        }
                        width={360}
                        height={260}
                        gap={60}
                      />
                  )}
                </div>

              );
            }) : <p className="mt-16 ml-10 font-comfortaa"> No Products are available </p>}
    </>
  )
}

export default LandingPage
