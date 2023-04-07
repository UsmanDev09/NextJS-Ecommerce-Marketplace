import { GetStaticProps } from "next";
import Link from "next/link";

import Category from "../../model/category";
import SideBar from "../../components/Categories/SideBar";
import Products from "../../components/Products/Products";
import CategoryAPI from "../../api/category/category";
import Rating from "../../components/Products/Rating";
import PriceRange from "../../components/PriceRange/PriceRange";
import * as path from "../../constants/paths"

const DisplayCategories = (props) => {
  const categories = props?.categories;

  const clickedRating = (rating) => {
  }
  return (

      <div className="flex">
        <div className="w-80  ml-24 mt-4">
          <SideBar />
          {categories ?
            categories.map((category) => {
              return (
                <Link
                  key={category.id}
                  href={{
                    pathname: `/${path.CATEGORIES}/${category[Object.keys(category)[0]].name}`,
                    query: { categories: categories },
                  }}
                >
                  <h1 className="text-[#1C1F22] font-comfortaa text-s px-3 mt-2 mb-2">
                    {category[Object.keys(category)[0]].name}
                  </h1>
                </Link>
              );
            }) : <p className="font-comfortaa text-[12px] ml-4"> No categories are available </p>}

          <h1 className="font-unica text-2xl px-3 mt-8 mb-4">RATING</h1>

            <div className="flex items-center px-3 mb-2">
            <Rating stars={5} clickedRating={clickedRating}/>
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={4} clickedRating={clickedRating}/>
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={3} clickedRating={clickedRating}/>
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={2} clickedRating={clickedRating}/>
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={1} clickedRating={clickedRating}/>
          </div>

          <h1 className="font-unica text-2xl mt-8 mb-4 px-3">PRICE RANGE</h1>
          <PriceRange />
          <p className="text-center mt-6 font-comfortaa text-[#1C1F22]">$0 - $999+</p>

        </div>

        <div className="w-3/4">
          {categories ?
            categories.map((category) => {
              return (
                <>
                  <div key={category.categoryId}></div>
                  {Object.keys(category) !== null && (
                    <div>
                      <Products
                        hideCategoryName={true}
                        categoryName={category.name}
                        products={
                          category[Object.keys(category)[0]].products !== null ? category[Object.keys(category)[0]].products : []
                        }
                        height={220}
                        width={271}
                        gap={24}
                      />
                    </div>
                  )}
                </>
              );
            }) : <p className="mt-16 ml-10 font-comfortaa"> No Products are available </p>}
        </div>
      </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await CategoryAPI.getAllCategories();
    const categories = await response.json();

    return {
      props: { categories: categories },
    };
  } catch (error) {
    return {
      props: { errCode: 500 },
    };
  }
};

export default DisplayCategories;
