import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {MdLogout} from "react-icons/md"
import {BsFillBagFill} from "react-icons/bs"
import "./Navbar.css";

export const Navbar = () => {
  const [show, setShow] = useState(null);
  const [user, setUser] = useState(0);

  const navigate = useNavigate();
  const path = () => {
    navigate("/products");
  };
  const logOutUser = () => {
    localStorage.setItem("meesho-user-number", null);
    setUser(null);
    setUser(0);
  };

  let userPhn = JSON.parse(localStorage.getItem("meesho-user-number"));

  return (
    <>
      <div className="container">
        <div className="section1-header">
          <div className="section-inside">
            <div className="meesho-Logo">
              <Link to="/">
                <svg
                  viewBox="0 0 87 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="156"
                  height="36"
                  iconsize="20"
                  className="Icon-sc-1iwi4w1-0 cZPTbN"
                >
                  <path
                    d="M12.844 6.814c1.453.011 2.677.516 3.685 1.507 1.02.998 1.523 2.188 1.512 3.593L18 18.522c-.006.788-.668 1.423-1.488 1.423-.815-.006-1.471-.646-1.465-1.434l.04-6.608a2.048 2.048 0 00-.661-1.57c-.428-.43-.967-.646-1.6-.646a2.227 2.227 0 00-1.664.686c-.416.42-.621.997-.627 1.581l-.035 6.511c-.006.8-.68 1.446-1.506 1.44-.826-.006-1.494-.657-1.488-1.457l.04-6.55a2.21 2.21 0 00-.603-1.56c-.45-.464-1.002-.69-1.658-.696a2.236 2.236 0 00-1.611.629c-.434.425-.668.946-.668 1.558l-.041 6.602c-.006.794-.674 1.434-1.494 1.429-.82-.006-1.477-.652-1.471-1.445l.041-6.58a4.928 4.928 0 011.29-3.32c1.083-1.168 2.419-1.752 3.972-1.74 1.482.01 2.748.526 3.761 1.575 1.043-1.043 2.297-1.542 3.78-1.536zm18.682 7.316l-8.479-.052c.07 1.02.41 1.83 1.008 2.436.603.596 1.377.902 2.32.907.738.006 1.348-.159 1.834-.499.287-.204.598-.504.932-.918a1.434 1.434 0 011.787-.362l.088.045a1.32 1.32 0 01.369 2.034 7.51 7.51 0 01-.287.318 6.416 6.416 0 01-1.389 1.11 5.61 5.61 0 01-1.594.63c-.574.13-1.19.198-1.857.192-1.91-.011-3.445-.617-4.594-1.813-1.148-1.202-1.717-2.794-1.705-4.772.012-1.96.586-3.542 1.717-4.743 1.143-1.19 2.643-1.78 4.512-1.763 1.886.012 3.375.601 4.459 1.774 1.078 1.162 1.61 2.76 1.6 4.806a.703.703 0 01-.721.67zm-2.32-2.359c-.405-1.53-1.395-2.3-2.972-2.306a2.985 2.985 0 00-1.013.153 2.928 2.928 0 00-.867.453c-.258.198-.48.436-.668.714a3.24 3.24 0 00-.428.952l5.947.034zM45.64 14.13l-8.478-.052c.07 1.02.41 1.83 1.007 2.436.604.596 1.377.902 2.32.907.739.006 1.348-.159 1.835-.499.287-.204.597-.504.931-.918a1.434 1.434 0 011.787-.362l.088.045a1.32 1.32 0 01.37 2.034 7.442 7.442 0 01-.288.318 6.416 6.416 0 01-1.388 1.11 5.61 5.61 0 01-1.594.63c-.574.13-1.19.198-1.857.192-1.91-.011-3.446-.617-4.594-1.813-1.149-1.202-1.717-2.794-1.705-4.772.012-1.96.586-3.542 1.717-4.743 1.142-1.19 2.642-1.78 4.511-1.763 1.887.012 3.375.601 4.46 1.774 1.077 1.162 1.61 2.76 1.599 4.806a.703.703 0 01-.72.67zm-2.32-2.359c-.405-1.53-1.395-2.3-2.971-2.306a2.985 2.985 0 00-1.014.153 2.928 2.928 0 00-1.535 1.167 3.24 3.24 0 00-.427.952l5.947.034zM61.976 0c.838.006 1.506.663 1.5 1.474l-.062 6.478c1.084-.93 2.277-1.14 3.578-1.134 1.3.006 2.66.566 3.539 1.501.75.81 1.113 2.103 1.101 3.871l-.047 6.302c-.005.81-.685 1.456-1.523 1.45-.838-.005-1.506-.663-1.5-1.473l.041-6.024c.006-1.014-.176-1.751-.54-2.204-.368-.46-.966-.692-1.792-.692-1.055-.006-1.805.306-2.238.935-.428.64-.645 1.74-.657 3.298l-.035 4.664c-.005.81-.685 1.457-1.523 1.451-.838-.005-1.506-.663-1.5-1.473l.129-16.962c.012-.822.691-1.468 1.53-1.462zM73.44 13.46c.012-1.751.668-3.236 1.975-4.454 1.3-1.219 2.888-1.825 4.746-1.808 1.869.011 3.451.64 4.746 1.887 1.277 1.241 1.91 2.766 1.898 4.562-.012 1.82-.668 3.332-1.974 4.556-1.313 1.213-2.918 1.808-4.81 1.797-1.882-.012-3.446-.646-4.712-1.899-1.254-1.235-1.88-2.782-1.869-4.641zm2.96.068c-.007 1.213.316 2.17.984 2.879.68.72 1.582 1.082 2.707 1.088 1.13.006 2.039-.34 2.718-1.043.68-.703 1.026-1.638 1.037-2.816.006-1.18-.322-2.12-.996-2.828-.68-.714-1.582-1.083-2.707-1.088-1.107-.006-2.004.345-2.695 1.054-.691.708-1.037 1.626-1.049 2.754zm-19.405-.257c.907.664 1.363 1.53 1.38 2.582v.044c0 1.286-.507 2.348-1.453 3.067-.868.66-2.073 1.008-3.476 1.008-1.492 0-3.064-.42-4.427-1.177a1.362 1.362 0 01-.485-1.967 1.443 1.443 0 011.2-.626c.248 0 .49.06.704.18 1.042.577 2.107.882 3.076.882 1.532 0 1.695-.74 1.695-1.062v-.044c0-.648-.884-.953-2.332-1.378-.101-.033-.197-.06-.293-.087-.963-.267-1.965-.589-2.743-1.144-.924-.665-1.374-1.537-1.374-2.67v-.044c0-2.326 1.949-3.955 4.737-3.955 1.172 0 2.45.283 3.617.806.36.164.642.463.766.834a1.36 1.36 0 01-.113 1.106l-.006.005a1.449 1.449 0 01-1.256.714c-.214 0-.417-.043-.608-.13-.907-.41-1.763-.627-2.479-.627-.912 0-1.504.37-1.504.948v.043c0 .67 1.172 1.03 2.411 1.417l.242.076c.952.284 1.938.632 2.721 1.199z"
                    fill="#F43397"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="search-container">
              <span className="glass_Logo">
                <svg
                  viewBox="0 0 20 20"
                  fill="greyT2"
                  xmlns="http://www.w3.org/2000/svg"
                  iconsize="20"
                  className="Icon-sc-1iwi4w1-0 huVmzl"
                >
                  <g clipPath="url(#search_svg__clip0)">
                    <path
                      d="M19.77 18.67l-3.76-3.76a9.062 9.062 0 002.12-5.83C18.13 4.06 14.07 0 9.06 0 4.06 0 0 4.06 0 9.08c0 5.02 4.06 9.08 9.06 9.08 2.23 0 4.27-.81 5.85-2.15l3.76 3.76c.3.3.8.3 1.1 0 .31-.3.31-.8 0-1.1zM9.06 16.6c-4.14 0-7.51-3.37-7.51-7.52 0-4.15 3.37-7.52 7.51-7.52s7.51 3.37 7.51 7.52c0 4.15-3.37 7.52-7.51 7.52z"
                      fill="#666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="search_svg__clip0">
                      <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Try Saree,Kurti or Search by Product Code"
                className="search-input"
              />
            </div>
            <div className="top-right-header-section">
              <div
                className="dwnApp_cont svColor ussP_DwnAPP"
                onMouseEnter={() => setShow("dwnapp")}
                onMouseLeave={() => setShow(null)}
              >
                <svg
                  viewBox="0 0 16 24"
                  xmlns="http://www.w3.org/2000/svg"
                  mr="8"
                  className="Icon-sc-1iwi4w1-0 cHrYdI hover"
                  iconsize="20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488zM2.672 5.335v11.469h10.656V5.335H2.672zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 01-1.488-1.488zM.8 3.36A3.36 3.36 0 014.16 0h7.68a3.36 3.36 0 013.36 3.36v17.28A3.36 3.36 0 0111.84 24H4.16A3.36 3.36 0 01.8 20.64V3.36zm6 16.447a.6.6 0 000 1.2h2.4a.6.6 0 100-1.2H6.8z"
                    fill="#333"
                  ></path>
                </svg>
                <span>Download App</span>

                {show === "dwnapp" ? (
                  <div id="downapp">
                    <div id="dwnApp_inside">
                      Download From
                      <div>
                        <img
                          src="https://images.meesho.com/images/pow/homepage/google-play-button.jpg"
                          alt="playstore-logo"
                        />
                      </div>
                      <div>
                        <img
                          src="https://images.meesho.com/images/pow/homepage/appstore-button.jpg"
                          alt="app-store"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="divider"></div>
              <div className="dwnApp_cont">Become a supplier</div>
              <div className="divider"></div>
              <div
                id="profileCont"
                onMouseEnter={() => setShow("userProf")}
                onMouseLeave={() => setShow(null)}
              >
                <div className="dwnApp_cont profile svColor">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Icon-sc-1iwi4w1-0 ejWRyr hover"
                    mr="8"
                    iconsize="20"
                    fill="#f43397"
                  >
                    <g clipPath="url(#user_svg__clip0)">
                      <path
                        d="M15.316 13.016c1.512-1.058 2.516-2.797 2.516-4.784A5.835 5.835 0 0012 2.4a5.835 5.835 0 00-5.832 5.832 5.79 5.79 0 002.517 4.784C4.343 14.291 1.2 17.996 1.2 22.37v.022c0 .896.843 1.609 1.825 1.609h17.95c.983 0 1.825-.713 1.825-1.61v-.02c0-4.375-3.143-8.08-7.484-9.354zM7.853 8.232a4.148 4.148 0 018.294 0 4.148 4.148 0 01-8.294 0zm13.122 14.083H3.025a.245.245 0 01-.14-.032c.054-4.45 4.126-8.057 9.115-8.057 4.99 0 9.05 3.596 9.115 8.057a.245.245 0 01-.14.032z"
                        fill="#333"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="user_svg__clip0">
                        <path
                          fill="#fff"
                          transform="translate(1.2 2.4)"
                          d="M0 0h21.6v21.6H0z"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Profile</span>
                  {show === "userProf" ? (
                    <div id="user_Prof">
                      <div id="userProf_inside">
                        <span>
                          <img
                            src="https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png"
                            alt=""
                            width={"30px"}
                          />
                          Hello User - 
                          {JSON.parse(
                            localStorage.getItem("meesho-user-number")
                          )}
                        </span>
                        <p className="sml">To access your Meesho account</p>
                        <p id="userNum">{userPhn ? "+91 " + userPhn : null}</p>
                        <div>
                          {userPhn ? null : (
                            <Link to="/signup" className="linkTAGS">
                              <button className="signupBtn">Sign Up</button>
                            </Link>
                          )}
                        </div>
                        <div><BsFillBagFill/>  My Orders</div>
                        <div onClick={logOutUser}>
                         <MdLogout/> {!userPhn ? null : "Log Out"}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="dwnApp_cont profile">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  mr="8"
                  className="Icon-sc-1iwi4w1-0 gMCceT hover"
                  stroke="greyBase"
                  iconsize="20"
                >
                  <path
                    d="M4.987 5.469l1.848 7.2a1 1 0 00.968.752h8.675a1 1 0 00.962-.726l1.697-5.952a1 1 0 00-.962-1.274H4.987zm0 0l-.943-3.248a1 1 0 00-.96-.721H1"
                    stroke="#666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <ellipse
                    cx="9.421"
                    cy="16.744"
                    rx="1.243"
                    ry="1.256"
                    stroke="#666"
                    strokeWidth="1.5"
                  ></ellipse>
                  <ellipse
                    cx="15.221"
                    cy="16.744"
                    rx="1.243"
                    ry="1.256"
                    stroke="#666"
                    strokeWidth="1.5"
                  ></ellipse>
                </svg>
                <div>
                  <Link to="/cart" className="linkTAGS">
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="section2-header">
          <div className="section-inside below_sec" id="stn2_Inside">
            <div
              id="women_Eth_cat"
              onMouseEnter={() => setShow("womenE")}
              onMouseLeave={() => setShow(null)}
              onClick={() => navigate("/products/Women Ethnic")}
            >
              <div onClick={path}>Women Ethnic</div>
              {show === "womenE" ? (
                <div
                  className="lowerDiv"
                  id="wowW"
                  onClick={() => navigate("/products/Women Ethnic")}
                >
                  <div>
                    All Women Ethnic
                    <div></div>
                    <div>View All</div>
                  </div>
                  <div>
                    Sarees
                    <div></div>
                    <div>All Sarees</div>
                    <div>Silk Sarees</div>
                    <div>Rayon Kurtis</div>
                    <div>Cotton Sarees</div>
                    <div>Georgette Sarees</div>
                  </div>
                  <div>
                    Kurtis
                    <div></div>
                    <div>All Kurtis</div>
                    <div>Anarkali Kurtis</div>
                    <div>Cotton Kurtis</div>
                    <div>Embroidered Kurtis</div>
                  </div>
                </div>
              ) : null}
            </div>
            <div
              onMouseEnter={() => setShow("womenW")}
              onMouseLeave={() => setShow(null)}
              onClick={() => navigate("/products/Women Western")}
            >
              <div onClick={path}>Women Western</div>
              {show === "womenW" ? (
                <div
                  className="lowerDiv"
                  id="wowW"
                  onClick={() => navigate("/products/Women Western")}
                >
                  <div>
                    Topwear
                    <div></div>
                    <div>Dresses</div>
                    <div>Tops</div>
                    <div>Sweaters</div>
                    <div>Jumpsuits</div>
                  </div>
                  <div>
                    Bottomwear
                    <div></div>
                    <div>Jeans</div>
                    <div>Jeggings</div>
                    <div>Palazzos</div>
                    <div>Shorts</div>
                  </div>
                  <div>
                    Sleepwear
                    <div></div>
                    <div>Nightsuits</div>
                    <div>Babydolls</div>
                  </div>
                </div>
              ) : null}
            </div>
            <div
              onMouseEnter={() => setShow("womenJ")}
              onMouseLeave={() => setShow(null)}
              onClick={() => navigate("/products/Jewellery & Accessories")}
            >
              <div onClick={path}>Jewellery & Accessories</div>
              {show === "womenJ" ? (
                <div className="lowerDiv" id="wowJ">
                  <div>
                    Jewellery
                    <div></div>
                    <div>Mangalsutras</div>
                    <div>Earrings</div>
                    <div>Bangles</div>
                    <div>Necklaces</div>
                  </div>
                  <div>
                    Women Accessory
                    <div></div>
                    <div>Bags</div>
                    <div>Watches</div>
                    <div>Hair Accessories</div>
                    <div>Sunglasses</div>
                  </div>
                </div>
              ) : null}
            </div>
            <div
              onMouseEnter={() => setShow("Men")}
              onMouseLeave={() => setShow(null)}
              onClick={() => navigate("/products/Men")}
            >
              <div onClick={path}>Men</div>
              {show === "Men" ? (
                <div
                  className="lowerDiv"
                  id="wowJ"
                  onClick={() => navigate("/products/Men")}
                >
                  <div>
                    Top Wear
                    <div></div>
                    <div>All Top Wear</div>
                    <div>Tshirts</div>
                    <div>Shirts</div>
                  </div>
                  <div>
                    Bottom Wear
                    <div></div>
                    <div>Track Pants</div>
                    <div>Jeans</div>
                    <div>Trousers</div>
                  </div>
                  <div>
                    Men FootWear
                    <div></div>
                    <div>Sports</div>
                    <div>Shoes</div>
                    <div>Casual Shoes</div>
                  </div>
                </div>
              ) : null}
            </div>
            <div
              onMouseEnter={() => setShow("beauty")}
              onClick={() => navigate("/products/Beauty & Health")}
            >
              <div>Beauty & Health</div>
            </div>
            <div
              onMouseEnter={() => setShow("menH")}
              onClick={() => navigate("/products/Men")}
            >
              <div>Men Beauty & Health</div>
            </div>
            <div
              onMouseEnter={() => setShow("h&K")}
              onClick={() => navigate("/products/Home & Kitchen")}
            >
              <div>Home & Kitchen</div>
            </div>
            <div
              onMouseEnter={() => setShow("kids")}
              onClick={() => navigate("/products/Kids")}
            >
              <div>Kids</div>
            </div>
            <div
              onMouseEnter={() => setShow("elec")}
              onClick={() => navigate("/products/Electronics")}
            >
              <div onClick={path}>Electronics</div>
            </div>
          </div>
        </div>
      </div>
      <div className="line_divider"></div>
    </>
  );
};
