import React from "react";
import { Link } from "react-router-dom";
function CaseStudy() {

    return (
        <>
            <div class="uni-banner">
                <div class="container">
                    <div class="uni-banner-text-area">
                        <h1>Case Study</h1>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li>Case Study</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="case ptb-100">
                <div class="container">
                    <div class="default-section-title default-section-title-middle">
                        <h6>Case Study</h6>
                        <h3>Our Recent Case Study</h3>
                    </div>
                    <div class="section-header">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c1.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c2.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Desktop App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c3.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c4.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c5.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">App Structure</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c6.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c7.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c8.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Windows App</Link></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="case-card">
                                    <img src="assets/images/case-study/c9.jpg" alt="image" />
                                    <div class="case-study-text">
                                        <Link to="/case-study/case-details"><i class="fas fa-plus"></i></Link>
                                        <p>Online</p>
                                        <h4><Link to="/case-study/case-details">Mobile App</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CaseStudy;
