import React from 'react'
import productData from './productData'

const ProductCard = ({productId}) => {
    const{image, name, price, company, location} = productData[productId]
    return (
        <a href="#">
            <div className="product-card">
            <img src={image} alt={name}/>
                <div className="details-container">
                    <h3>{name}</h3>
                    <div className="price">Price: Rp. {price}</div>
                    <div className="company">Company: {company}</div>
                    <div className="location">Location: {location}</div>
                </div>
            </div>
        </a>
    )
}

export default ProductCard