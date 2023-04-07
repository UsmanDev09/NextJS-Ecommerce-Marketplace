import Product from '../../model/product';
import { fullUrl } from '../api';

const productRoute = '/api/product'; // might have to change once the api is tested

const ProductAPI = Object.freeze({
  createProduct: (formData) => createProduct(formData),
  deleteProduct: (id) => deleteCategory(id),
  addProductToCategory: (id, name, token) =>
    addProductToCategory(id, name, token),
  updateProduct: (id, product) => updateProduct(id, product),
  getProduct: (id) => getProducts(id),
  getAllProducts: (id) => getAllProducts(id),
});

const createProduct = (formData) => {
  return fetch(`${fullUrl}/api/createproducts`, {
    method: 'POST',
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    body: JSON.stringify(formData),
  })
};
const addProductToCategory = (data, name, token) => {
  return fetch(`${fullUrl}/api/addproductstocategory`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
};
const updateProduct = (id, product) =>
  fetch(`${fullUrl}${productRoute}/updateProduct/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ product: product, id: id }),
  });

const deleteCategory = (id) =>
  fetch(`${fullUrl}${productRoute}/deleteProduct/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({ id }),
  });

const getAllProducts = (categoryId) =>
  fetch(`${fullUrl}${productRoute}/${categoryId}/get/0/20`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
  });

const getProducts = () => {
  return fetch(`${fullUrl}/api/getproducts`, {
    method: 'GET',
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    body: JSON.stringify(formData),
  })
};

export default ProductAPI;
