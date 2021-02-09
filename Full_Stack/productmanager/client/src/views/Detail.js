import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <h1>Title: {product.title}</h1>
            <h2>Price: {product.price} $$</h2>
            <p> Description:{product.desc} </p>
        </div>
    )
}