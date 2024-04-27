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
                        <div className="col-lg-12">
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
                        {/* <div className="col-lg-4">
                            <div className="google-map pt-30">
                                <iframe className="g-map"
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2371.0813443498755!2d-113.4208817841543!3d53.53846178001977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s25%2F50%20Street%20Here%20United%20For%20Australia!5e0!3m2!1sen!2sbd!4v1626086534014!5m2!1sen!2sbd"></iframe>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


            <div className="contact-card-area pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="contact-card">
                                <i className="fas fa-map-marker-alt"></i>
                                <h5>Our Address:</h5>
                                <p><a href="https://goo.gl/maps/9sYMkTHSbEd1xmZr8">25 Ridge Franklin, US 1593</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="contact-card">
                                <i className="fas fa-envelope-open-text"></i>
                                <h5>Our Email:</h5>
                                <p><a
                                    href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#d3a0a6a3a3bca1a793baa9b2bdfdb0bcbe"><span
                                        className="__cf_email__"
                                        data-cfemail="aad9dfdadac5d8deeac3d0cbc484c9c5c7">[email&#160;protected]</span></a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="contact-card">
                                <i className="fas fa-mobile-alt"></i>
                                <h5>Our Phone:</h5>
                                <p><a href="tel:031163472">031-16-3472</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Contact;
