import authReducer from "./authReducer";
import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import productDetailReducer from "./productDetailReducer";
import purchaseProductReducer from "./purchaseProductReducer";
import brandsReducer from "./brandsReducer";
import colorsReducer from './colorsReducer';
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    productDetail: productDetailReducer,
    puchase: purchaseProductReducer,
    brands: brandsReducer,
    colors: colorsReducer,
    status: statusReducer
})

export default rootReducer;