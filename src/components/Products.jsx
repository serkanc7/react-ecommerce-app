import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../actions';
import ProductCard from './ProductCard';

const Products = ({ query }) => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState(products.productsData);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])


    const filterData = () => {
        if (products.loading) {
            if (query === undefined) {
                setFilteredProducts(products.productsData);
            }
            else {
                const filteredData = products.productsData.filter(product => product.category.id === query);
                setFilteredProducts(filteredData);
            }
        }
    }

    useEffect(() => {
        filterData();
    }, [query, products])


    return (
        <div className="products">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}

export default Products;
