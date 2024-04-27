import React from "react";
import { Link, useParams } from "react-router-dom";
const blogList = [
    {
        slug: `Some-Important-Rules-To-Start-A-New-Business`,
        title: `Some Important Rules To Start A New Business`,
        img: `assets/images/blog/b1.jpg`,
        details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b1.jpg"alt="image"><h3>Some Important Rules To Start A New Business</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
        date: `01 July 2021`,
        comments: [
            {
                name: `user 1`,
                comment: ` comment content`
            },
        ],
    },
    {
        slug: `Why-Would-You-Need-Some-New-Business`,
        title: `Why Would You Need Some New Business`,
        img: `assets/images/blog/b2.jpg`,
        details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b2.jpg"alt="image"><h3>Why Would You Need Some New Business</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
        date: `01 July 2021`,
        comments: [
            {
                name: `user 1`,
                comment: ` comment content`
            },
        ],
    },
    {
        slug: `Know-Top-Ten-Rules-For-Corporate-Business`,
        title: `Know Top Ten Rules For Corporate Business`,
        img: `assets/images/blog/b3.jpg`,
        details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b3.jpg"alt="image"><h3>Know Top Ten Rules For Corporate Business</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
        date: `01 July 2021`,
        comments: [
            {
                name: `user 1`,
                comment: ` comment content`
            },
        ],
    },
    {
        slug: `The-Biggest-`,
        title: `The Biggest Contribution Of Corporate Business World.`,
        img: `assets/images/blog/b4.jpg`,
        details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b4.jpg"alt="image"><h3>The Biggest Contribution Of Corporate Business World.</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
        date: `01 July 2021`,
        comments: [
            {
                name: `user 1`,
                comment: ` comment content`
            },
        ],
    },
    {
        slug: `Why-Would-You-Need-Some-New-Business`,
        title: `Why Would You Need Some New Business`,
        img: `assets/images/blog/b5.jpg`,
        details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b5.jpg"alt="image"><h3>Why Would You Need Some New Business</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
        date: `01 July 2021`,
        comments: [
            {
                name: `user 1`,
                comment: ` comment content`
            },
        ],
    },
    {
        slug: `Know-Top-Ten-Rules-For-Corporate-Business`,
        title: `Know Top Ten Rules For Corporate Business`,
        img: `assets/images/blog/b6.jpg`,
        details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b6.jpg"alt="image"><h3>Know Top Ten Rules For Corporate Business</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
        date: `01 July 2021`,
        comments: [
            {
                name: `user 1`,
                comment: ` comment content`
            },
        ],
    },
];

function BlogDetails() {

    let blogSlug = useParams();
    let blogDetais = blogList.filter(blog => blog.slug == blogSlug.blogSlug)[0];
    console.log(blogDetais)

    return (
        <>
            <div className="uni-banner">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h3 className="text-white ">{blogDetais.title}</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Blog Details</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="blog-details ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div dangerouslySetInnerHTML={{ __html: blogDetais.details }} />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="sidebar-area pt-30">
                                <div className="sidebar-card search-box">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Here.." required />
                                            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-card categories mt-30">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><a className="active" href="#"><i className="fas fa-angle-right"></i>
                                            Business</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Research</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Development</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Branding</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Marketing</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Support</a></li>
                                    </ul>
                                </div>
                                <div className="sidebar-card recent-news">
                                    <h3>Recent News</h3>
                                    <div className="recent-news-card">
                                        <img src="assets/images/inner-pages/bds1.jpg" alt="image" />
                                        <h5><a href="#">Some Important Rules To A New Business</a></h5>
                                        <p>5th Jun 2021</p>
                                    </div>
                                    <div className="recent-news-card">
                                        <img src="assets/images/inner-pages/bds2.jpg" alt="image" />
                                        <h5><a href="#">Why Would You Need Some New Business</a></h5>
                                        <p>4th Jun 2021</p>
                                    </div>
                                    <div className="recent-news-card">
                                        <img src="assets/images/inner-pages/bds3.jpg" alt="image" />
                                        <h5><a href="#">Know Top Ten Rules For Corporate Business</a></h5>
                                        <p>2nd Jun 2021</p>
                                    </div>
                                </div>
                                <div className="sidebar-card sd-tag">
                                    <h3>Tags</h3>
                                    <ul>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Strategy</a></li>
                                        <li><a href="#">Research</a></li>
                                        <li><a href="#">Branding</a></li>
                                        <li><a href="#">Planning</a></li>
                                        <li><a href="#">Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogDetails;
