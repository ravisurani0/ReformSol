import React from "react";
import { Link } from "react-router-dom";
function Contact() {

    return (
        <>
            <div className="uni-banner">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h1>Get In Touch</h1>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="contact-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-area bg-f9faff pr-20">
                                <div className="default-section-title">
                                    <h6>Contact Us</h6>
                                    <h3>How Can We Help You?</h3>
                                </div>
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" id="name" required
                                                    data-error="Please enter your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" placeholder="Email"
                                                    id="email" required data-error="Please enter your Email" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" name="phone_number" className="form-control"
                                                    placeholder="Phone Number" id="phone_number" required
                                                    data-error="Please enter your phone number" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="text" name="msg_subject" className="form-control" placeholder="Subject"
                                                    id="msg_subject" required data-error="Please enter your subject" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <div className="form-group">
                                                <textarea name="message" id="message" className="form-control"
                                                    placeholder="Your Messages.." cols="30" rows="5" required
                                                    data-error="Please enter your message"></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-12">
                                            <button className="default-button" type="submit"><span>Send Message</span></button>
                                            <div id="msgSubmit" className="h6 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="google-map pt-30">
                                <iframe className="g-map"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14684.258499981552!2d72.5163501!3d23.0580922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d005f00c677%3A0x59602ce37217037e!2sNarayan%20Darshan%20Bungalows!5e0!3m2!1sen!2sin!4v1714493791935!5m2!1sen!2sin"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contact-card-area pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="contact-card">
                                <i className="fas fa-map-marker-alt"></i>
                                <h5>Our Address:</h5>
                                <p><a href="https://goo.gl/maps/9sYMkTHSbEd1xmZr8">01, Narayan Darshan, Near Zydus Hospital, Ahmedabad, 380054.</a></p>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <a onClick={() => window.location = 'mailto:support@reformsol.com'}>
                                <div className="contact-card">
                                    <i className="fas fa-envelope-open-text"></i>
                                    <h5>Our Email:</h5>
                                    <p><span className="__cf_email__">support@reformsol.com</span>
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <a href="tel:+919512327005">
                                <div className="contact-card">
                                    <i className="fas fa-mobile-alt"></i>
                                    <h5>Our Phone:</h5>
                                    <p>+91 9512327005</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}

export default Contact;
