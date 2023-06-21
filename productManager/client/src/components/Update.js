import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';
import styles from '../styles.module.css';

const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const updateProduct = productData => {
        axios.patch(`http://localhost:8000/api/product/${id}`, productData)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.center}>
            <h1>Update Information for {product.title}</h1>
            {loaded && (
                <div className={styles.link}>
                    <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
                    <Link to="/">Home|</Link>
                    <DeleteButton productId={product._id} successCallback = {() => navigate("/")} />
                </div>
            )}
        </div>
    )
}
    export default Update;