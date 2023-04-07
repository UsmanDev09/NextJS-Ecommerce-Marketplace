import Category from '../../model/category';
import { fullUrl } from '../api';

const categoryRoute = '/api/order';

const CategoryAPI = Object.freeze({
  createCategory: (formData, token) => createCategory(formData, token),
  deleteCategory: (id) => deleteCategory(id),
  updateCategory: (id, category) => updateCategory(id, category),
  getAllCategories: () => getAllCategories(),
  getCategory: (name) => getCategory(name),
});

const createCategory = (formData) =>
  fetch(`${fullUrl}/api/createcategory`, {
    method: 'POST',
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    body: JSON.stringify(formData),
  });

const updateCategory = (id, category) =>
  fetch(`${fullUrl}${categoryRoute}/updateCategory/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category: category, id: id }),
  });

const deleteCategory = (id) =>
  fetch(`${fullUrl}${categoryRoute}/deleteCategory/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({ id }),
  });

const getCategory = (name) =>
  fetch(`${fullUrl}/api/getcategory`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
    body: name,
  })
const getAllCategories = () => {
  return fetch(`${fullUrl}/api/getcategories`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
  });
};
export default CategoryAPI;
