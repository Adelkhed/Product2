import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"


const OneProduct = () => {
    const { product_id } = useParams()
    console.log(product_id)
    const [oneProduct, setOneProduct] = useState({})
    useEffect(() => {
        Axios.get("http://localhost:5000/api/products/"+product_id)
            .then((res) => {
                console.log(res.data)
               setOneProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [product_id]);
        console.log(product_id)
    return (
        <div>
        <h1>One Product</h1>
            <div key={oneProduct._id}>
                <h3>{oneProduct.title}</h3>
                <h3>{oneProduct.price}</h3>
                <h3>{oneProduct.description}</h3>
            </div>
        </div>
    )
}

export default OneProduct