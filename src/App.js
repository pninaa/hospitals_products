import logo from './logo.svg';
import classNames from 'classnames'
import './App.css';
import {useState} from 'react';
import {Amplify} from 'aws-amplify';
import config from "aws-exports";
import {withAuthenticator} from "@aws-amplify/ui-react";

Amplify.configure(config);

function App() {

  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
 
      <header>
            <div className={classNames({"header-area":true , "grey-3-bg":true , "pl-55":true , "pr-55":true})} >
                <div className="container-fluid">
                    <div className="row">
                        <div className={classNames({"col-xl-8":true , "col-lg-9":true , "col-md-8":true})}>
                            <div className="header-top-wrapper">
                                <div className="header-info">
                                    <span><img src="images/phone.png" height="13px" style={{marginTop:"-3px" , marginRight:'5px'}} /> Call Us +123 (456) 7879</span>
                                    <span className="envelopes-header-icon"><img src="images/envelope.jpeg" height="13px" style={{marginTop:"-1px" , marginRight:'3px'}} />  <a href="mailto:support@gmail.com" className="__cf_email__" >support@gmail.com</a></span>
                                    <span className="mails-header-icon"><img src="images/map_marked.png" height="21px" style={{marginTop:"-1px" , marginRight:'3px'}} /> 205 Main Street, USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-4">
                            <div className="header-icon f-right">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="sticky-header" className="main-menu-area menu-02 pl-55 pr-55">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="logo">
                                <a href="index.html"><img src="images/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="main-menu">
                                <nav id="mobile-menu" style={{display:"block"}}>
                                    <ul>
                                        <li className="active"><a href="index.html">home</a>
                                        </li>
                                        <li><a href="/">Categories </a>
                                          <ul className="sub-menu text-left">
                                                <li><a href="shop-grid.html">shop grid</a>
                                                </li><li><a href="/">shop full width</a>
                                                </li><li><a href="/">shop 04 column</a>
                                                </li><li><a href="/">shop left 02 column</a>
                                                </li><li><a href="/">shop right sidebar</a>
                                                </li><li><a href="/">product details</a>
                                                </li><li><a href="/">wishlist</a>
                                                </li><li><a href="/">checkout</a>
                                                </li><li><a href="/">cart</a>
                                                </li><li><a href="/">login</a>
                                                </li><li><a href="/">register</a>

                                            </li></ul>
                                        </li>
                                        <li><a href="/">Forum</a>
                                            <ul className="sub-menu text-left">
                                                <li><a href="/">Forum1</a></li>
                                                <li><a href="/">Forum2</a></li>
                                                <li><a href="/">Forum3</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/">pages</a>
                                            <ul className="sub-menu text-left">
                                                <li><a href="/">about</a></li>
                                                <li><a href="/">contact</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3">
                            <div className="header-top-right text-md-right d-none d-lg-block">
                                <div className="shop-menu">
                                    <ul>
                                        <li><a className="my-icon" href="/"><img src="images/myAccount.png" height="22px"  style={{marginRight:"4px" , marginTop:"-2px"}}/> My Account</a></li>
                                        <li><a href="/"><img src="images/wishlist.png" height="20px"  style={{marginRight:"2px" , marginTop:"-2px"}}/> Wishlist</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="header-search-area pt-15 pb-15 pl-55 pr-55">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-6">
                            <div className="menu-bar menu-bar-2">
                                <a className="cat-toggle" href="#" onClick={() => {setShowSideMenu((prev) => !prev)}}><img src="images/hamburger.png" height="35px" style={{marginTop:"-1px" , marginRight:'3px'}} /></a>
                                <span>Categories</span>
                            </div>
                            <div className="category-menu" style={{display:(showSideMenu ? "block":"none")}}>
                                <ul>
                                    <li><a href="shop.html"><i className="fal fa-cart-arrow-down"></i> Hand Sanitizer</a></li>
                                    <li><a href="shop.html"><i className="fal fa-cart-arrow-down"></i> medical meter</a></li>
                                    <li><a href="shop.html"><i className="fal fa-cart-arrow-down"></i> home accessories</a></li>
                                    <li><a href="shop.html"><i className="fal fa-cart-arrow-down"></i> surgery mask</a></li>
                                    <li><a href="shop.html"><i className="fal fa-cart-arrow-down"></i> disable chair</a></li>
                                    <li><a href="shop.html"><i className="fal fa-cart-arrow-down"></i> hand sanitizer</a></li>
                                    <li><a href="shop.html"><i className="fal fa-cart-arrow-down"></i> hand gloves</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-6 d-none d-lg-block">
                            <div className="header-search header-02-search ">
                                <form className="header-search-form">
                                    <input placeholder="Search" type="text" />
                                    <button type="submit">
                                      <div style={{marginTop:"-3px" , marginLeft:"2px"}}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff"  className="magnifier" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 490.4 490.4" >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                        <g id="SVGRepo_iconCarrier"> <g> <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"/> </g> </g>
                                      </svg>
                                      </div>
                                      </button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </header>
   
  );
}

export default App;
