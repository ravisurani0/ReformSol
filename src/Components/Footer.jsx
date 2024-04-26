import React from "react";
function Footer() {
    return (
        <>
            <div class="footer ptb-100 bg-f9faff">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-logo-area">
                                <img class="black-logo" src="assets/images/logo.png" alt="logo" />
                                <img class="white-logo" src="assets/images/white-logo.png" alt="logo" />
                                <p>Lorem ipsum dolor sit amet, consec tetur elit eiusmod tempor incididunt labore dolore magna
                                    aliqua consec tetur adipiscing elite sed do labor.</p>
                                <div class="footer-social-icons">
                                    <span>Follow Us:</span>
                                    <ul>
                                        <li><a href="https://www.facebook.com/" target="_blank"><i
                                            class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/" target="_blank"><i
                                            class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                                        </li>
                                        <li><a href="https://www.instagram.com/" target="_blank"><i
                                            class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-links footer-contact-list">
                                <h3>Get In Touch</h3>
                                <div class="footer-content-card">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <h5>Location:</h5>
                                    <p><a href="https://goo.gl/maps/LFFvE4dNnyq67gGeA">2976 Sunrise Avenue, Las Vegas, USA</a>
                                    </p>
                                </div>
                                <div class="footer-content-card">
                                    <i class="fas fa-envelope"></i>
                                    <h5>Email:</h5>
                                    <p><a
                                        href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#0f7c7a7f7f607d7b4f66756e61216c6062"><span
                                            class="__cf_email__"
                                            data-cfemail="483b3d3838273a3c0821322926662b2725">[email&#160;protected]</span></a>
                                    </p>
                                </div>
                                <div class="footer-content-card">
                                    <i class="fas fa-mobile-alt"></i>
                                    <h5>Phone:</h5>
                                    <p><a href="tel:+13454567877">+1-3454-5678-77</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-links footer-quick-links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><a href="about.html" target="_blank"><i class="fas fa-angle-right"></i>
                                        <span>About</span></a></li>
                                    <li><a href="services.html" target="_blank"><i class="fas fa-angle-right"></i> <span>Our
                                        Services</span></a></li>
                                    <li><a href="testimonial.html" target="_blank"><i class="fas fa-angle-right"></i>
                                        <span>Testimonials</span></a></li>
                                    <li><a href="team.html" target="_blank"><i class="fas fa-angle-right"></i> <span>Our
                                        Team</span></a></li>
                                    <li><a href="blog.html" target="_blank"><i class="fas fa-angle-right"></i> <span>Our
                                        Blog</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-links footer-newsletter">
                                <h3>Subscribe</h3>
                                <p>Subscribe To Our Newsletter To Get Our Update News!</p>
                                <form>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Your Email" />
                                        <button class="btn" type="submit"><i class="far fa-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="copyright bg-f9faff">
                <div class="container">
                    <p>Copyright @
                        <script data-cfasync="false"
                            src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                        <script>document.write(new Date().getFullYear())</script>. <strong>Izan</strong> All Rights Reserved By
                        <a target="_blank" href="https://hibootstrap.com/">HiBootstrap</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;
