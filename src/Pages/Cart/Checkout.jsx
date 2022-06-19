// import "./checkout.css";

export const Checkout = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const handleart = () => {
    alert("PRODUCT TO BE DELIVERED SOOON - CONGRATULATIONS");
  };
  return (
    <>
      <div id="topcontainer">
        <div className="navbar">
          <div id="navImg"></div>

          <div id="setup">
            {/* <div id="radii"></div> */}

            <div></div>
          </div>
        </div>
      </div>
      <div id="container">
        <div id="leftheading">
          <h2>Checkout</h2>
        </div>

        <div id="rightheading">
          <h2>Order Summary</h2>
        </div>
        <div id="mainbox">
          <div id="leftbox">
            <h3>Delivery Address</h3>
            <div id="name">
              <div id="firstname">
                <h4>First Name</h4>
                <input id="nameinput" type="text" required={true}/>
              </div>
              <div id="lastname">
                <h4>Last Name</h4>
                <input id="nameinput" type="text" required={true}/>
              </div>
            </div>
            <div id="fullname">
              <h4>Full Name for Delivery Address</h4>
              <input id="addressinput" type="text" required={true}/>
            </div>
            <input type="checkbox" id="namebox" required={true}/>
            <label id="boxlabel" for="phone">
              My Delivery Address name is same as my First and Last Name
            </label>
            <div id="address">
              <h4>Address Line 1</h4>
              <input id="addressinput" type="text" isRequired/>
            </div>
            <div id="address">
              <h4>Address Line 2 (Optional)</h4>
              <input id="addressinput" type="text" isRequired/>
            </div>
            <div id="place">
              <div id="city">
                <h4>City</h4>
                <input id="cityinput" type="text" isRequired/>
              </div>
              <div id="state">
                <h4>State</h4>
                <input id="stateinput" type="text" isRequired/>
              </div>
              <div id="state">
                <h4>Zip</h4>
                <input id="zipinput" type="text" isRequired/>
              </div>
            </div>
            <div id="address">
              <h4>Phone</h4>
              <input id="addressinput" type="number" isRequired/>
            </div>
            <input type="checkbox" id="phonebox" />
            <label id="boxlabel" for="phone">
              Receive SMS text message update on my orders
            </label>
            <div id="fullname">
              <h4>
                Email (We require your email to send you receiots and order
                updates)
              </h4>
              <input id="addressinput" type="text" isRequired/>
            </div>
            <hr />
            <div id="total">
              <div id="todtotal">
                <h3>Today's Total</h3>
              </div>
              <div id="amttotal">
                <h3>0</h3>
              </div>
            </div>
            <div className="btnn"><button onClick={handleart}>PRODUCT BROUGHT SUCCESSFULLY</button></div>
          </div>
          <div id="righttopbox">
            <div className="promo">
              <a className="promoatag" href="">
                + Add Promo Code
              </a>
            </div>
            <hr />
            <div className="deliverydate">
              <p className="deliverydatep">Delivery Date</p>
            </div>
            <select name="date" id="deliverydateinput">
              <option value="">Sunday, January 30</option>
              <option value="">Thursday, February 3</option>
              <option value="">Friday, February 4</option>
              <option value="">Sunday, February 6</option>
              <option value="">Thursady, February 10</option>
              <option value="">Friday, February 11</option>
            </select>
            <hr id="hr4" />

            <hr id="hr3" />
            <div id="mealsbox">
              <div id="meals">
                <h4>Shipping</h4>
              </div>
              <div id="shippingamt">
                <h4>0</h4>
              </div>
            </div>
            <hr id="hr3" />
            <div id="mealsbox">
              <div id="meals">
                <h4>Total</h4>
              </div>
              <div id="mealsamt">
                <h4>0</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
