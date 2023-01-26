import Products from "../../components/Products/Products";

const Search = ({addToCart, searchResults}) => {
  return (
    <>
      <Products addToCart={addToCart} products={searchResults} />
    </>
  );
};

export default Search;
