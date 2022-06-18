import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { changeCheckoutStage } from "../../Redux/Cart/action";
import styles from "./Cart.module.css";

export const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cartData, shallowEqual);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let res = 0;
    cart?.forEach((curr) => (res += curr.qty * curr.discounted_price));
    setTotal(res);
    dispatch(changeCheckoutStage(1));
  }, [cart]);
  
  return (
    <div>
      Cart
      <div className={styles.folder}>
        {
          cart.length === 0 ? (
            <div className={styles.empty}>
                <img style={{ marginTop: "7rem", border : "5px solid red"}} src="https://meesho.com/assets/Checkout/empty-cart.png" alt="empty-cart" />
                <p style={{ marginTop: "3rem"}}>Your cart is empty</p>
                <button onClick={()=>navigate("/")} style={{ padding: "1rem 2rem", marginTop: "2rem" }} > View Products </button>
            </div>
        ) : (
          <div className={styles.priceBar}>
            <div
                totalPrice={total}
                delivery={0}
                cod={0}
                first={true}
                isContinue={true}
                // onContinue={handleContinue}
            />
            <img className={styles.helpImg} src="https://images.meesho.com/images/marketing/1588578650850.png" alt="safe meesho" />
        </div>
        )
        }
      </div>
      <Footer/>
    </div>
  );
};
