import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';
import styles from '../styles.module.css'

const ProductList = (props) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            setProduct(res.data)
        })
        .catch((err) => {console.log(err)
        })
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId))
    }

    return (
        <div className={styles.content}>
            <h1>All Products: </h1>
            {
                product.map((product) => {
                    return (
                        <div key={product._id}>
                            <Link className={styles.link} to={`/product/${product._id}`}>{product.title}</Link>
                            <Link className={styles.link} to={`/product/edit/${product._id}`}> | Edit | </Link>
                            <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default ProductList;