import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./homeproducts.module.css"
import { Link } from 'react-router-dom';
import Axios from "axios"


export const HomeProducts = () => {
    const [Products, setProducts] = useState([]);
    
    const getData =()=> {
        Axios.get("https://project-unit5.herokuapp.com/homepageProducts").then(({data}) => {
            console.log("data", data)
            setProducts([...data]) 
        }).catch((err) => {console.log(err)})}

    useEffect(() => {
       getData()
    }, []);

  return (
    <>
      <h1 className={styles.heading}>Products For You</h1>
        <div className={styles.productDetails}>
        {Products.map((itm,product)=>(
          <div className={styles.containerDiv}>
            <Link key ={product.id} to={`product/${itm.id}`} style={{textDecoration: "none", cursor : "pointer"}} className={styles.mainDiv}>  
              <div className={styles.images} >
              <img className={styles.productImg} src={itm.images[0]} alt="ItemItemage"/>
              </div>
              <div className={styles.desc}>
                <div className={styles.title}>
                  <span>{itm.title}</span>
                </div>
                <div className={styles.prices}>
                  <span>₹{itm.discounted_price}</span> 
                  <span className={styles.strikeDiv}>₹{itm.original_price}</span>
                  <span> {Math.ceil( 100 * ((itm.original_price-itm.discounted_price)/(itm.original_price)))}% off </span>
                </div>
                <div className={styles.disc}>
                  <span> ₹{itm.original_price - itm.discounted_price} discount on 1st order</span>
                </div>
                <div className={styles.delvy}>
                  <span>Free Delivery</span>
                </div>
                <div className={styles.text}>
                  {/* Fontawesome */}
                  <div> <span className={styles.ratings}>{itm.rating}<span className="fa fa-star checked bck"></span></span>  <span className={styles.reviews}>{itm.original_price * 35} Reviews</span> </div>
                  {/* <div> {itm.original_price * 35} Reviews </div> */}
                </div>
              </div>
            </Link>
            </div>
        ))}
        </div>
    </>
  )
}
