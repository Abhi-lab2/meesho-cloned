import React from "react";
import "./checkoutmain.css";
import { useNavigate } from "react-router-dom";

export const CheckoutNew = () => {
  const navigate = useNavigate();
  const submitHandler = () => {
    alert("PRODUCT BROUGHT SUCCESSFULLY & YOU SAVED ₹390");
    navigate("/");
  };
  return (
    <div className="body">
      <div id="plural_logo"></div>
      <div id="top_opt">
        <div class="acc_pay">
          <div class="ind_blk">
            <div class="circle">
              <span
                class="material-icons"
                // style="font-size:18px"
                id="acc_arrow"
              >
                chevron_right
              </span>
            </div>
            <div class="circle_cont">ACCOUNT</div>
          </div>
          <div class="line"></div>
          <div class="ind_blk">
            <div class="circle">
              <span
                class="material-icons"
                // style="font-size:18px"
                id="pay_arrow"
              >
                chevron_right
              </span>
            </div>
            <div class="circle_cont">PAYMENT</div>
          </div>
          <div class="line"></div>
          <div class="ind_blk">
            <div class="circle">
              <span
                class="material-icons"
                // style="font-size:18px"
                id="review_arrow"
              >
                chevron_right
              </span>
            </div>
            <div class="circle_cont">REVIEW</div>
          </div>
        </div>
      </div>
      <div class="back">
        {/* <a class="back_to" href="../skillpage/skillsPage.html">
          {" "}
          &lt; Back to pricing
        </a> */}
      </div>
      <div class="main_blk">
        <div class="main">
          <div id="srl_no1">
            <div class="drawer_head">
              <div class="account">
                <div class="number">
                  <strong>1</strong>
                </div>
                <div class="acc_heading">Account details</div>
                <div class="already">
                  Already have an account?
                  {/* <a class="already_signin" href="../login-sigup/login.html">
                    Sign in
                  </a> */}
                </div>
              </div>
            </div>
            <div id="hidding1">
              <div class="drawer_blk1" aria-hidden="false">
                <div class="acc_data_blk">
                  <div class="sub_inp">
                    <label class="labels">
                      First name*
                      <div>
                        <input
                          class="user_inp"
                          id="first_name"
                          type="text"
                          onfocusout="myFunc_fname()"
                        />
                      </div>
                      <div class="req_feild" id="fname_mand">
                        Required
                      </div>
                    </label>
                  </div>

                  <div class="sub_inp">
                    <label class="labels">
                      Last name*
                      <div>
                        <input
                          class="user_inp"
                          id="last_name"
                          type="text"
                          onfocusout="myFunc_lname()"
                        />
                      </div>
                      <div class="req_feild" id="lname_mand">
                        Required
                      </div>
                    </label>
                  </div>

                  <div class="sub_inp">
                    <label class="labels">
                      Email*
                      <div>
                        <input
                          class="user_inp"
                          id="email"
                          type="mail"
                          onfocusout="myFunc_mail()"
                        />
                      </div>
                      <div class="req_feild" id="mail_mand">
                        Required
                      </div>
                    </label>
                  </div>

                  <div class="sub_inp">
                    <label class="labels">
                      Confirm Email*
                      <div>
                        <input
                          class="user_inp"
                          id="c_email"
                          type="mail"
                          onfocusout="myFunc_cmail()"
                        />
                      </div>
                      <div class="req_feild" id="cmail_mand">
                        Required
                      </div>
                    </label>
                  </div>

                  <div class="sub_inp">
                    <label class="labels">
                      <div>Country of residence*</div>
                      <div>
                        <select
                          class="user_inp"
                          id="country"
                          //   onfocusout="myFunc_country()"
                        >
                          <option value="empty">- Select One -</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BT">Bhutan</option>
                          <option value="IN">India</option>
                          <option value="LK">Sri Lanka</option>
                        </select>
                      </div>
                      <div class="req_feild" id="contry_mand">
                        Required
                      </div>
                    </label>
                  </div>

                  <div class="sub_inp">
                    <label class="labels">
                      Coupon code (if available)
                      <div>
                        <input class="user_inp" type="text" value="" />
                      </div>
                    </label>
                  </div>

                  <div class="sub_inp">
                    <label class="labels">
                      Password*
                      <div>
                        <input
                          class="user_inp"
                          id="pass"
                          type="password"
                          onfocusout="myFunc_pass()"
                        />
                      </div>
                      <div class="req_feild" id="pass_mand">
                        Required
                      </div>
                    </label>
                  </div>

                  <div class="sub_inp">
                    <label class="labels">
                      Confirm Password*
                      <div>
                        <input
                          class="user_inp"
                          id="c_pass"
                          type="password"
                          onfocusout="myFunc_cpass()"
                          value=""
                        />
                      </div>
                      <div class="req_feild" id="cpass_mand">
                        Required
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div class="terms_blk">
                <div class="term_align">
                  <span>
                    <input type="checkbox" class="tick_box" />
                  </span>
                  <span class="by_check">
                    By checking here and continuing, I agree to the{" "}
                    <strong data-css-41sc57=""></strong>
                    <span class="terms_use">Terms of Use.</span>
                  </span>
                </div>
                <div>
                  <button onClick={submitHandler}>Continue</button>
                </div>
              </div>
            </div>
          </div>

          <div id="srl_no2">
            <div class="drawer_head">
              <div class="account">
                <div class="number">
                  <strong>2</strong>
                </div>
                <div class="acc_heading">Payment</div>
              </div>
            </div>
            <div id="hidding2">
              <div class="drawer_blk1" aria-hidden="false">
                <div class="acc_data_blk2">
                  <div class="pay_head">Select a payment method</div>
                </div>
                <div id="pay_background">
                  <div class="pay_line"></div>
                  <div class="pay_options1">
                    <div class="opt_circle">
                      <div>
                        <div id="inner_circle"></div>
                      </div>
                      <div>Payment Card</div>
                    </div>
                    <div class="card_type">
                      <div>
                        <img
                          class="crd_img"
                          src="https://app.pluralsight.com/unified-payment-method/static/images/visa.svg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          class="crd_img"
                          src="https://app.pluralsight.com/unified-payment-method/static/images/mastercard.svg"
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          class="crd_img"
                          src="https://app.pluralsight.com/unified-payment-method/static/images/discover.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pay_detail_blk">
                    <div class="pay_data_blk">
                      <div class="sub_inp">
                        <label class="pay_label">
                          Name on Card*
                          <div>
                            <input
                              class="pay_user_inp"
                              id="card_name"
                              type="text"
                              value=""
                            />
                          </div>
                          <div class="req_feild" id="cardnme_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          Card number*
                          <div>
                            <input
                              class="pay_user_inp"
                              id="card_nmbr"
                              type="number"
                              value=""
                            />
                          </div>
                          <div class="req_feild" id="cardnmbr_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          <div>Expiration*</div>
                          <div id="pay_drop">
                            <div id="month">
                              <select class="user_inp1" id="card_month">
                                <option class="opt" value="">
                                  - Select One -{" "}
                                </option>
                                <option class="opt" value="01">
                                  {" "}
                                  01{" "}
                                </option>
                                <option class="opt" value="02">
                                  02
                                </option>
                                <option class="opt" value="03">
                                  {" "}
                                  03{" "}
                                </option>
                                <option class="opt" value="04">
                                  {" "}
                                  04{" "}
                                </option>
                                <option class="opt" value="05">
                                  {" "}
                                  05{" "}
                                </option>
                                <option class="opt" value="06">
                                  {" "}
                                  06{" "}
                                </option>
                                <option class="opt" value="07">
                                  {" "}
                                  07{" "}
                                </option>
                                <option class="opt" value="08">
                                  {" "}
                                  08{" "}
                                </option>
                                <option class="opt" value="09">
                                  {" "}
                                  09{" "}
                                </option>
                                <option class="opt" value="10">
                                  {" "}
                                  10{" "}
                                </option>
                                <option class="opt" value="11">
                                  {" "}
                                  11{" "}
                                </option>
                                <option class="opt" value="12">
                                  {" "}
                                  12{" "}
                                </option>
                              </select>
                            </div>
                            <div class="seperator">
                              <strong>\</strong>
                            </div>
                            <div id="year">
                              <select class="user_inp1" id="card_year">
                                <option class="opt" value="">
                                  - Select One -{" "}
                                </option>
                                <option class="opt" value="21">
                                  {" "}
                                  2021{" "}
                                </option>
                                <option class="opt" value="22">
                                  2022
                                </option>
                                <option class="opt" value="23">
                                  2023{" "}
                                </option>
                                <option class="opt" value="24">
                                  2024{" "}
                                </option>
                                <option class="opt" value="25">
                                  2025{" "}
                                </option>
                                <option class="opt" value="26">
                                  2026{" "}
                                </option>
                                <option class="opt" value="27">
                                  2027{" "}
                                </option>
                                <option class="opt" value="28">
                                  2028{" "}
                                </option>
                                <option class="opt" value="29">
                                  2029{" "}
                                </option>
                                <option class="opt" value="30">
                                  2030{" "}
                                </option>
                                <option class="opt" value="31">
                                  2031{" "}
                                </option>
                                <option class="opt" value="32">
                                  2032{" "}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="req_feild" id="date_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          CVV*
                          <div>
                            <div class="cvv_inp">
                              <div>
                                <input
                                  class="cvv_inp1"
                                  type="number"
                                  id="cvv_nmbr"
                                  value=""
                                />
                              </div>
                              <div>
                                <img
                                  class="cvv_img"
                                  src="https://static.zuora.com/Resources/108224/Images/cvv_logo.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div class="req_feild" id="cvv_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          Address*
                          <div>
                            <input
                              class="pay_user_inp"
                              id="address"
                              type="text"
                              value=""
                            />
                          </div>
                          <div class="req_feild" id="address_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          Address(cont.)*
                          <div>
                            <input
                              class="pay_user_inp"
                              id="address1"
                              type="text"
                              value=""
                            />
                          </div>
                          <div class="req_feild" id="address1_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          Contry*
                          <div>
                            <input
                              class="pay_user_inp"
                              id="card_contry"
                              type="text"
                              value=""
                            />
                          </div>
                          <div class="req_feild" id="card_contry_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          City*
                          <div>
                            <input
                              class="pay_user_inp"
                              id="city"
                              type="text"
                              value=""
                            />
                          </div>
                          <div class="req_feild" id="city_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          State* (No state?Enter 'none'.)
                          <div>
                            <input
                              class="pay_user_inp"
                              id="state"
                              type="text"
                              value=""
                            />
                          </div>
                          <div class="req_feild" id="state_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div class="sub_inp">
                        <label class="pay_label">
                          Postal Code*
                          <div>
                            <input
                              class="pay_user_inp"
                              id="post_code"
                              type="number"
                              value=""
                            />
                          </div>
                          <div class="req_feild" id="post_mand">
                            Required
                          </div>
                        </label>
                      </div>

                      <div>
                        <button onclick="payment()" class="review_btn">
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="pay_line"></div>
                </div>
              </div>
            </div>
          </div>

          <div id="srl_no3">
            <div class="drawer_head">
              <div class="account">
                <div class="number">
                  <strong>3</strong>
                </div>
                <div class="acc_heading">Review and Confirm</div>

                <div class="secure_pay">
                  <div data-css-7lhegg="">Secure checkout</div>
                  <img
                    class="secure_img"
                    src="https://www.pluralsight.com/buy/static/assets/icon-lock.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div id="hidding3">
              <div id="btn_final" class="final_btn">
                <button onclick="confirm_pay()" class="final_cnfm">
                  Confirm Pay
                </button>
              </div>

              <div id="hide_thanks" class="thanks">
                <div>Successfull... Thank you</div>
              </div>
            </div>
          </div>
        </div>

        <div class="summary">
          <div>
            <div class="order_head">Order Summary</div>
            <div class="odr_det">
              <div class="plan">
                <div class="pln_head">PLAN</div>
                <div class="pln_det" id="scheme_plan">
                  xxxx
                </div>
              </div>
              <div class="price">
                <div class="pln_head">PRICE</div>
                <div class="price_det" id="scheme_price">
                  ₹740
                </div>
              </div>
            </div>

            <div class="sub_tot">
              <div>
                <div class="sub_title">Subtotal</div>
                <div class="sub_amt" id="plan_sub_total">
                  ₹740
                </div>
              </div>
              <div>
                <div class="sub_title">Estimated tax ✝</div>
                <div class="sub_amt">₹45</div>
              </div>
            </div>

            <div class="tot_due">
              <div class="tot_due_head">Total due today</div>
              <div class="price_det" id="plan_total">
                ₹785
              </div>
            </div>
          </div>
          <div class="description">
            <div class="description">
              <span>✝✝</span>
              Excluding transaction taxes such as sales tax, VAT, GST and other
              similar taxes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
