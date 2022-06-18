import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <br /> <br />
      <div
        className={'foot'}
        style={{ backgroundColor: "rgb(249, 249, 250)", zIndex: "1", width : "100%" }}
      >
        <br />
        <div className={'banner5'}>
          <div className={'banner5tbox'}>
            <h1 className={'banner5h1'}>Shop Non-Stop on Meesho</h1>
            <p style={{ textAlign: "left", marginTop: 10 }}>
              Trusted by more than 1 Crore Indians
              <br />
              Cash on Delivery | Free Delivery
            </p>

            <div className={'logos'}>
              <img
                src="https://images.meesho.com/images/pow/homepage/google-play-button.jpg"
                alt="playstore"
              />
              <img
                src="https://images.meesho.com/images/pow/homepage/appstore-button.jpg"
                alt="apple"
              />
            </div>
          </div>
          <div className={'career'}>
            <p>Careers</p>

            <p>Become a supplier</p>
            <p>Our Influencer Program</p>
            <p>Hall of Fame</p>
          </div>
          <div className={'career'}>
            <p>Legal and Policies</p>
            <p>Meesho Tech Blog</p>
            <p>Notices and Return</p>
          </div>

          <div className={'career'}>
            <h4>Reach out to us</h4>
            <div className={'social'}>
              <a href="https://www.facebook.com/meeshosupply">
                <img src="https://meesho.com/assets/facebook.png" alt="fb" />
              </a>
              <a href="https://www.instagram.com/meeshoapp/">
                <img
                  src="https://meesho.com/assets/instagram.png"
                  alt="instagram"
                />
              </a>
              <a href="https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw">
                <img
                  src="https://meesho.com/assets/youtube.png"
                  alt="youtube"
                />
              </a>
              <a href="https://www.linkedin.com/company/meesho/">
                <img
                  src="https://meesho.com/assets/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://twitter.com/Meesho_Official/">
                <img
                  src="https://meesho.com/assets/twitter.png"
                  alt="twitter"
                />
              </a>
            </div>
          </div>

          <div className={'career'}>
            <h4>Contact Us</h4>
            <h6>
              Fashnear Technologies Private
              <br />
              Limited,
              <br />
              CIN: U74900KA2015PTC082263
              <br />
              06-105-B, 06-102, (138 Wu)
              <br />
              Vaishnavi Signature, No. 78/9,
              <br />
              Outer Ring Road, Bellandur,
              <br />
              Varthur Hobli, Bengaluru-560103,
              <br />
              Karnataka, India
              <br />
              E-mail address:
              <br />
              query@meesho.com
              <br />© 2015-2022 Meesho.com
            </h6>
          </div>
        </div>

        <div className={'footer'}>
          <div style={{ marginLeft: 15 }}>
            More About Meesho download the app now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
