import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

    return (
        <Link className="product-card" to={`/product/${product.id}`}>
            <img className="product-card__img" src={product.imageUrl} alt={product.title} />
            <div className="product-card__info">
                <div className="product-card__brand">{product.brand.title}</div>
                <div className="product-card__color">
                    <span className="product-card__color-title">Renk: </span>
                    <span className="product-card__color-value">{product.color.title}</span>
                </div>
            </div>
            <div className="product-card__price">{product.price} TL</div>
        </Link>
    )
}

export default ProductCard
