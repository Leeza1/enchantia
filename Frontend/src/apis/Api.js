import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});
const config ={
    headers:{
        'authorization' : `Bearer ${localStorage.getItem('token')}`,
    }
}
// creating route
export const testApi = () => Api.get('/');

// register route
export const registerApi = (data) => Api.post('/api/user/register', data);

// Login route
export const loginApi = (data) => Api.post('/api/user/login', data);


// export const testApi = () => Api.get("/api/user/test");

//add product route
export const  addProductApi  = (data) => Api.post('/api/product/add', data, config);

//get all products
export const  getAllProductsApi  = (data) => Api.get('/api/product/get_products');

//get single product
export const  getSingleProductApi  = (id) => Api.get(`/api/product/get_product/${id}`);

//update product route
export const  updateProductApi  = (id,data) => Api.put(`/api/product/update_product/${id}` , data, config);

// delete product route
export const deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`, config);

//create order
export const createOrderApi = (data) => Api.post('/api/orders/create', data, config);

//get orders by user
export const getOrdersByUserApi =(data) => Api.get('/api/orders/getOrdersByUserId', config);

//get all orders
export const getAllOrdersApi = () => Api.get('/api/orders/getAllOrders', config);

//add necklace route
export const addNecklaceApi = (data) => Api.post('/api/necklace/add',data, config);

//get all necklace
export const getAllNecklaceApi = (data) => Api.get('/api/necklace/get_necklaces');

//get single necklace
export const getSingleNecklaceApi = (id) => Api.get(`/api/necklace/get_necklace/${id}`,config);

//update necklace route

//update necklace route

//delete necklace route