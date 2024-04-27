import React from "react";
import { Link } from "react-router-dom";
function Services() {
    return (
        <>
            <div className="uni-banner">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h1>Our Services</h1>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="service ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-2 default-section-title-middle">
                        <h6>Services</h6>
                        <h3>We Are The Best Software Company In This Area</h3>
                    </div>
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="service-card-2">
                                    <span></span>
                                    <div className="service-card-content">
                                        <div className="service-card-2-img">
                                            <img src="assets/images/icons/011-content-1.png" alt="image" />
                                        </div>
                                        <h4><a href="#">Content Management</a></h4>
                                        <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipis cing do elite
                                            labore magna aliqua dolor ipsum insididunt aliqua.</p>
                                        <a className="default-button-3 default-button-3-h" href="#">Read More <i
                                            className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="service-card-2">
                                    <span></span>
                                    <div className="service-card-content">
                                        <div className="service-card-2-img">
                                            <img src="assets/images/icons/012-analytic.png" alt="image" />
                                        </div>
                                        <h4><a href="#">Statistic Analysis</a></h4>
                                        <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipis cing do elite
                                            labore magna aliqua dolor ipsum insididunt aliqua.</p>
                                        <a className="default-button-3 default-button-3-h" href="#">Read More <i
                                            className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="service-card-2">
                                    <span></span>
                                    <div className="service-card-content">
                                        <div className="service-card-2-img">
                                            <img src="assets/images/icons/013-customer-service-agent.png" alt="image" />
                                        </div>
                                        <h4><a href="#">Support Service</a></h4>
                                        <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipis cing do elite
                                            labore magna aliqua dolor ipsum insididunt aliqua.</p>
                                        <a className="default-button-3 default-button-3-h" href="#">Read More <i
                                            className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="service-card-2">
                                    <span></span>
                                    <div className="service-card-content">
                                        <div className="service-card-2-img">
                                            <img src="assets/images/icons/025-browser.png" alt="image" />
                                        </div>
                                        <h4><a href="#">Security Management</a></h4>
                                        <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipis cing do elite
                                            labore magna aliqua dolor ipsum insididunt aliqua.</p>
                                        <a className="default-button-3 default-button-3-h" href="#">Read More <i
                                            className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="service-card-2">
                                    <span></span>
                                    <div className="service-card-content">
                                        <div className="service-card-2-img">
                                            <img src="assets/images/icons/022-language.png" alt="image" />
                                        </div>
                                        <h4><a href="#">Smart Notification</a></h4>
                                        <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipis cing do elite
                                            labore magna aliqua dolor ipsum insididunt aliqua.</p>
                                        <a className="default-button-3 default-button-3-h" href="#">Read More <i
                                            className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="service-card-2">
                                    <span></span>
                                    <div className="service-card-content">
                                        <div className="service-card-2-img">
                                            <img src="assets/images/icons/030-pencil.png" alt="image" />
                                        </div>
                                        <h4><a href="#">Unlimited Customization</a></h4>
                                        <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipis cing do elite
                                            labore magna aliqua dolor ipsum insididunt aliqua.</p>
                                        <a className="default-button-3 default-button-3-h" href="#">Read More <i
                                            className="fas fa-long-arrow-alt-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="pagination mt-30">
                            <ul>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i className="fas fa-arrow-right"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
