import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../actions';

const Categories = ({ query }) => {

    const [selected, setSelected] = useState(query);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, [])

    const handleClick = name => {
        setSelected(name);
    }

    return (
        <nav className="category-tabs">
            <Link to="/" className={selected === undefined ? "category-tabs__tab active" : "category-tabs__tab"} onClick={() => handleClick(undefined)}>hepsi</Link>
            {
                categories.categoriesData.map((category) => (
                    <Link
                        key={category.id}
                        to={`?category=${category.id}`}
                        className={selected === category.id ? "category-tabs__tab active" : "category-tabs__tab"}
                        onClick={() => handleClick(category.id)}
                    >
                        {category.title}
                    </Link>
                ))
            }
        </nav>
    )
}

export default Categories
