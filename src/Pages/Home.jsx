import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { useDispatch } from "react-redux";
import { HomeProducts } from "./HomeProducts";
import Footer from "../components/Footer";
import supplierImg from "../Imgs/supplierImage.png";

export const Home = () => {
  //   const dispatch = useDispatch();
  //   const getSarees = () => {
  //     // dispatch(getQuery("Sarees"));
  //   };
  //   const getDress = () => {
  //     // dispatch(getQuery("Dresses"));
  //   };
  //   const getMensWear = () => {
  //     // dispatch(getQuery("Mens Top Wear"));
  //   };
  return (
    <div style={{ fontFamily: "Mier bold" }}>
      <div className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.title}>
            Lowest Prices
            <div>Best Quality Shopping</div>
          </div>
          <div className={styles.title1}>
            1 Crore+ Products | 650+ Categories
          </div>
          <div className={styles.button}>
            <img
              width="8%"
              height="50%"
              src="https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png"
              alt="googleplay logo"
            />
            <span>Download the Meesho App</span>
          </div>
        </div>
        <div className={styles.container1}></div>
      </div>
      <div className={styles.Hline}>
        <div className={styles.hr}></div>
        <div className={styles.heading}>Top Categories to choose from</div>
        <div className={styles.hr}></div>
      </div>
      <div className={styles.advertise}>
        <div className={styles.banner1}>
          <div className={styles.img}>
            <Link to="/categories">
              <img
                // onClick={getSarees}
                src="https://images.meesho.com/images/marketing/1649760442043.webp"
                alt="images"
              />
            </Link>
          </div>
          <div className={styles.temp}>
            <Link to="/categories">
              <img
                // onClick={getDress}
                src="https://images.meesho.com/images/marketing/1649760423313.webp"
                alt="images"
              />
            </Link>
          </div>
          <div className={styles.temp}>
            <Link to="/categories">
              <img
                // onClick={getMensWear}
                src="https://images.meesho.com/images/marketing/1649759799809.webp"
                alt="images"
              />
            </Link>
          </div>
        </div>
        <div className={styles.essentialProducts}>
          <Link to="/categories">
            <div className={styles.banner2}>
              <div className={styles.txtbox}>
                <span style={{ textDecoration: "none" }}>Essentials</span>
                <div className={styles.viewBtn}>
                  <button>VIEW ALL</button>
                </div>
              </div>
              <div className={styles.cardBox}>
                <div className={styles.card}>
                  <img
                    src="https://images.meesho.com/images/marketing/1649760808952.jpg"
                    alt="essentialItem-images"
                  />
                </div>
                <div className={styles.viewBtn1}>
                  <button>Beauty</button>
                </div>
              </div>
              <div className={styles.cardBox}>
                <div className={styles.card}>
                  <img
                    src="https://images.meesho.com/images/marketing/1649760703179.jpg"
                    alt="essentialItem-images"
                  />
                </div>
                <div className={styles.viewBtn1}>
                  <button>Home</button>
                </div>
              </div>
              <div className={styles.cardBox}>
                <div className={styles.card}>
                  <img
                    src="https://images.meesho.com/images/marketing/1649760786763.jpg"
                    alt="essentialItem-images"
                  />
                </div>
                <div className={styles.viewBtn1}>
                  <button>Electronics</button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <section>
          <div className={styles.resellerDiv}>
            <div className={styles.container3}>
              <h4>Become a Reseller and</h4>
              <h1>Start your Online Business</h1>
              <h1>with Zero Investment</h1>
              <div className={styles.box3}>
                <img
                  src="https://images.meesho.com/images/pow/playstore-icon.png"
                  alt="playstoreimg"
                />
                <img
                  src="https://images.meesho.com/images/pow/appstore-icon.png"
                  alt="appstoreimg"
                />
              </div>
            </div>
          </div>
        </section>
        <br /> <br />
        <div style={{ marginTop: "15", marginLeft:"1%"}}>
          <img src={supplierImg} alt="" width="88%"  />
        </div>
        <section>
          <div className="MainProductsDiv">
            {/* Mapped Products Here */}
            <HomeProducts />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
