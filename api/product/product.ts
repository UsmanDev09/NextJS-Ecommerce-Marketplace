import  Product  from "../../model/product";
import { fullUrl } from "../api";

const productRoute = "/api/product"; // might have to change once the api is tested

const ProductAPI = Object.freeze({
  createProduct: ( formData: any) =>
  createProduct( formData),
  deleteProduct: (id: number) => deleteCategory(id),
  addProductToCategory: (id:any, name: string, token:any) => addProductToCategory(id,name,token),
  updateProduct: (id: number, product: any) => updateProduct(id, product),
  getProduct: (id: number) => getProducts(id),
  getAllProducts: (id: number) => getAllProducts(id),
});

const createProduct = ( formData: any) => {
  return  fetch(`http://localhost:3000/api/createproducts`, {
    method: "POST",
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    body: JSON.stringify(formData),
  })
  }
  const addProductToCategory = (data:any,name: string, token:any) => {
    return fetch(`${fullUrl}/category?name=${name}`,{
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
  }
const updateProduct = (id: number, product: any) =>
  fetch(`${fullUrl}${productRoute}/updateProduct/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ product: product, id: id }),
  });

const deleteCategory = (id: number) =>
  fetch(`${fullUrl}${productRoute}/deleteProduct/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain",
    },
    body: JSON.stringify({ id }),
  });

const getAllProducts = (categoryId: number) =>
  fetch(`${fullUrl}${productRoute}/${categoryId}/get/0/20`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain",
    },
  });

const getProducts = (categoryId: number) =>
  fetch(`${fullUrl}/product`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "text/plain",
    },
  });

export default ProductAPI;
