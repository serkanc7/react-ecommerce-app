import React, { useEffect } from 'react'
import Header from '../components/shared/Header';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Products from '../components/Products';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'


const Home = () => {
    const { search } = useLocation();
    const values = queryString.parse(search);
    const query = values.category;

    return (
        <>
            <Header />
            <main className="home container">
                <Banner />
                <Categories query={query} />
                <Products query={query} />
            </main>
        </>
    )
}

export default Home
