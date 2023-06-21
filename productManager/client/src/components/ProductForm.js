import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../styles.module.css';

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            title,
            price,
            description
        });
    }

    const handleTitleSubmit = e => {
        setTitle(e.target.value);
    }
    const handlePriceSubmit = e => {
        setPrice(e.target.value);
    }
    const handleDescriptionSubmit = e => {
        setDescription(e.target.value);
    }

    return (
        <div className={styles.content}>
            <h1>Product Manager</h1>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <span className={styles.inputs}>
                    <label className={styles.label} htmlFor='title'>Title: </label>
                    <input className={styles.half} id='title' type='text' value={title} onChange={handleTitleSubmit} />
                </span>
                <span className={styles.inputs}>
                    <label className={styles.label} htmlFor='price'>Price: </label>
                    <input className={styles.half} id='price' type='text' value={price} onChange={handlePriceSubmit} />
                </span>
                <span className={styles.inputs}>
                    <label className={styles.label} htmlFor='description'>Description: </label>
                    <input className={styles.half} id='description' type='text' value={description} onChange={handleDescriptionSubmit} />
                </span>
                <input className={styles.submit} type='submit' value='Submit'/>
            </form>
        </div>
    )
}
export default ProductForm;