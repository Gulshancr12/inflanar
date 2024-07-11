import React from 'react';
import './home.css';
import { FaRegHandshake } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";



// Import images
import tiktok from './tiktok.jpg';
import youtube from './youtube.jpg';
import pinterest from './pinterest.jpg';
import facebook from './facebook.jpg';
import instagram from './instagram.jpg';
import sideimage from './sideimage.jpg';
import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg';
import picture3 from './picture3.jpg';
import RohitShrma from './RohitShrma.jpg'
import { TbUserSearch } from "react-icons/tb";




// Icons for steps
import { RiAccountBoxLine } from "react-icons/ri";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { GiBrandyBottle } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

// Icons for info box
import { FaDollarSign, FaCheckCircle, FaComments, FaLock } from 'react-icons/fa';

// Import FeaturedListings images
import facebook2 from './facebook2.jpg';
import instagram2 from './instagram2.jpg';
import tiktok2 from './tiktok2.jpg';

const Home = () => {
    return (
        <div className="home-container">

            <div class="main-1">

                <div id="main-1-part-1">
                    <div id="main-1-text-1">
                        <h1>
                            <h1>Find and hire the</h1>
                            <h1>perfect influencer for</h1>
                            <h1>the job</h1>
                        </h1>

                    </div>
                    <div id="main-1-text-2">
                        <p>Our marketplace offers a wide range of features designed to make the </p>
                        <p>collaboration process efficient and effective.Influencer can show their </p>
                        <p>unique talents. </p>

                    </div>
                    <div id="main-1-button-1">
                        <button>
                            <h2>Discover Now</h2>
                        </button>
                    </div>
                </div>
                <div id="main-1-part-2">

                </div>
            </div>

            <div class="in-company">
                <div id="in-company-1">
                    <div id="main-1-text-3">
                        <h2>You are in <b>Good Company:</b> </h2>
                        <div class="main-1-icon">
                            <i class="fa-brands fa-apple"></i>
                        </div>
                        <div class="main-1-icon">
                            <i class="fa-brands fa-d-and-d-beyond"></i>
                        </div>
                        <div class="main-1-icon">
                            <i class="fa-brands fa-magento"></i>
                        </div>
                        <div class="main-1-icon">
                            <i class="fa-brands fa-shopify"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="platform-section">
                <div id="platform-text">
                    <div id="platform-text-1">
                        <h1>Check by Platform </h1>
                        <br />
                        <p>We have a lot of opportunities for you.Come check then!</p>
                    </div>
                    <div id="platform-view">
                        <div><a href="platform-viewall">View All</a></div>
                    </div>
                </div>
                <hr />
                <div className="platform-images">

                    <div className="platform">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={tiktok} alt="TikTok" />
                            <p className="platform-name">TikTok</p>
                        </a>

                    </div>
                    <div className="platform">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube" />
                            <p className="platform-name">YouTube</p>
                        </a>
                    </div>
                    <div className="platform">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={pinterest} alt="Pinterest" />
                            <p className="platform-name">Pinterest</p>
                        </a>
                    </div>
                    <div className="platform">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" />
                            <p className="platform-name">Facebook</p>
                        </a>
                    </div>
                    <div className="platform">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="Instagram" />
                            <p className="platform-name">Instagram</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="how-it-works-section">
                <h2>How it works</h2> {/* Removed "View All" button */}
                <p>We have a lot of opportunities for you. Come check them!</p>
                <div className="how-it-works-content">
                    <div className="steps">
                        <a href="/signup" className="step blue">
                            <RiAccountBoxLine className="step-icon1" />
                            <h3>Create Account</h3>
                            <p>Vivamus vel fringilla est. Fusce fermentum, quam a aliquet semper, eros sapien ullamcorpe.</p>
                        </a>
                        <a href="#" className="step orange">
                            <ImProfile className="step-icon2" />
                            <h3>Complete Profile</h3>
                            <p>Vivamus vel fringilla est. Fusce fermentum, quam a aliquet semper, eros sapien ullamcorpe.</p>
                        </a>
                        <a href="#" className="step orange">
                            <TbUserSearch className="step-icon2" />
                            <h3>Find Brand</h3>
                            <p>Vivamus vel fringilla est. Fusce fermentum, quam a aliquet semper, eros sapien ullamcorpe.</p>
                        </a>
                        <a href="#" className="step blue">
                            <FaRegHandshake className="step-icon1" />
                            <h3>Collaborate</h3>
                            <p>Vivamus vel fringilla est. Fusce fermentum, quam a aliquet semper, eros sapien ullamcorpe.</p>
                        </a>
                    </div>
                    <div className="side-image">
                        <img src={sideimage} alt="Side" />
                    </div>
                </div>
            </div>

            <div className="info-box">
                <div className="info-item">
                    <FaDollarSign className="info-icon" />
                    <h3>No Upfront Cost</h3>
                    <p>Search influencers for free. No subscriptions, contracts or fees.</p>
                </div>
                <div className="info-item">
                    <FaCheckCircle className="info-icon" />
                    <h3>Verified Creators</h3>
                    <p>Every creator is verified by us. Always receive high-quality content.</p>
                </div>
                <div className="info-item">
                    <FaComments className="info-icon" />
                    <h3>Live Chat</h3>
                    <p>DM influencers and stay in touch throughout the whole transaction.</p>
                </div>
                <div className="info-item">
                    <FaLock className="info-icon" />
                    <h3>Safe Checkout</h3>
                    <p>Your money is held safely until you approve the creator's work.</p>
                </div>
            </div>

            <div id="featured-Listing">
                <div id="featured-Listing-text">
                    <div id="featured-Listing-text-1">
                        <h1>Featured Listings </h1>
                        <br />
                        <p>We have a lot of opportunities for you.Come check them!</p>
                    </div>
                    <div id="featured-Listing-view">
                        <div><a href="featured-Listing-viewall">View All</a></div>
                    </div>

                </div>


                <div class="featured-Listing-influencer">
                    <hr />
                    <div class="featured-Listing-influencer-1">
                        <div class="featured-Listing-influencers">
                            <div className="featured-Listing-influencer-details">
                                <img src={RohitShrma}
                                    alt="" />
                                <div class="featured-social-media">
                                    <div class="featured-social-account">
                                        <h3><a href="https://www.instagram.com/rohitsharma45/?hl=en">Instagram</a></h3>
                                    </div>
                                    <div class="featured-hiring-price">
                                        <h3><FaRupeeSign />80,000</h3>
                                    </div>
                                </div>

                                <div className="featured-influencer-about">
                                    <p>Bhuvan Bam is an actor, singer-songwriter, comedian and entrepreneur</p>
                                </div>
                            </div>
                        </div>
                        <div class="featured-Listing-influencers">
                            <div className="featured-Listing-influencer-details">
                                <img src={facebook2}
                                    alt="" />

                                <div class="featured-social-media">
                                    <div class="featured-social-account">
                                        <h3><a href="https://www.facebook.com/TheAmitBhadana/">Facebook</a></h3>
                                    </div>
                                    <div class="featured-hiring-price">
                                        <h3><FaRupeeSign />50,000</h3>
                                    </div>
                                </div>
                                <div class="featured-influencer-about">
                                    <p>inspired by friends and make good comedy to make people happy.</p>
                                </div>
                            </div>
                        </div>
                        <div class="featured-Listing-influencers">
                            <div className="featured-Listing-influencer-details">
                                <img src={instagram2}
                                    alt="" />


                                <div class="featured-social-media">
                                    <div class="featured-social-account">
                                        <h3><a href="https://www.instagram.com/nanakii9/">Instagram</a></h3>
                                    </div>
                                    <div class="featured-hiring-price">
                                        <h3><FaRupeeSign />30,000</h3>
                                    </div>
                                </div>
                                <div class="featured-influencer-about">
                                    <p>Get inspired by Ramona Flowers on her trip around the world</p>
                                </div>
                            </div>
                        </div>
                        <div class="featured-Listing-influencers">
                            <div className="featured-Listing-influencer-details">
                                <img src={instagram2}
                                    alt="" />


                                <div class="featured-social-media">
                                    <div class="featured-social-account">
                                        <h3><a href="https://www.instagram.com/nanakii9/">Instagram</a></h3>
                                    </div>
                                    <div class="featured-hiring-price">
                                        <h3><FaRupeeSign />30,000</h3>
                                    </div>
                                </div>
                                <div class="featured-influencer-about">
                                    <p>Get inspired by Ramona Flowers on her trip around the world</p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>

            <div id="most-popular">
                <div id="most-popular-text">
                    <div id="most-popular-text-1">
                        <h1>Our Most Popular </h1>
                        <br />
                        <p>We have a lot of opportunities for you.Come check then!</p>
                    </div>
                    <div id="most-popular-view">
                        <div><a href="most-popular-viewall">View All</a></div>
                    </div>

                </div>


                <div class="most-popular-influencer">
                    <hr />
                    <div class="most-popular-influencer-1">
                        <div class="popular-influencers">
                            <div id="popular-influencer-details-1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Bhuvan_Bam_at_Myntra%27s_Creator_Fest_2023_event_%28cropped%29.jpg"
                                    alt="" />
                            </div>
                            <div class="social-media">
                                <div class="social-account">
                                    <h3><a href="https://www.facebook.com/bhuvan.bam/">Facebook</a></h3>
                                </div>
                                <div class="hiring-price">
                                    <h3><i class="fa-solid fa-indian-rupee-sign"></i>80,000</h3>
                                </div>
                            </div>

                            <div class="influencer-about">
                                <p>Bhuvan Bam is an actor, singer-songwriter, comedian and entrepreneur</p>
                            </div>
                        </div>
                        <div class="popular-influencers">
                            <div id="popular-influencer-details-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6qhHX5bYdmaY9b7nmIoQ_MOV6Ykq64UH_g&s"
                                    alt="" />
                            </div>
                            <div class="social-media">
                                <div class="social-account">
                                    <h3><a href="https://www.threads.net/@triggeredinsaan">Threads</a></h3>
                                </div>
                                <div class="hiring-price">
                                    <h3><i class="fa-solid fa-indian-rupee-sign"></i>50,000</h3>
                                </div>
                            </div>
                            <div class="influencer-about">
                                <p>Bhuvan Bam is an actor, singer-songwriter, comedian and entrepreneur</p>
                            </div>
                        </div>
                        <div class="popular-influencers">
                            <div id="popular-influencer-details-3">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcRhIWqPgjLUP3oXxGFbLLE27WvaYWCeOSw&s"
                                    alt="" />

                            </div>
                            <div class="social-media">
                                <div class="social-account">
                                    <h3><a href="https://www.instagram.com/virat.kohli/?hl=en">Instagram</a></h3>
                                </div>
                                <div class="hiring-price">
                                    <h3><i class="fa-solid fa-indian-rupee-sign"></i>1,000,000</h3>
                                </div>
                            </div>
                            <div class="influencer-about">
                                <p>Bhuvan Bam is an actor, singer-songwriter, comedian and entrepreneur</p>
                            </div>
                        </div>
                        <div class="popular-influencers">
                            <div id="popular-influencer-details-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeWTrEwyEQ49JttyjgA1rHAa9t1GJwFrTZQ&s"
                                    alt="" />
                            </div>
                            <div class="social-media">
                                <div class="social-account">
                                    <h3><a href="https://www.youtube.com/channel/UCkS7Vxu4PjM99w0Is6idjcg">Youtube</a></h3>
                                </div>
                                <div class="hiring-price">
                                    <h3><i class="fa-solid fa-indian-rupee-sign"></i>100,000</h3>
                                </div>
                            </div>
                            <div class="influencer-about">
                                <p>Bhuvan Bam is an actor, singer-songwriter, comedian and entrepreneur</p>
                            </div>
                        </div>
                        <div class="popular-influencers">
                            <div id="popular-influencer-details-5">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUW79DMAugOHYUdfLfR3JjBnaFtfRo_7kbA&s"
                                    alt="" />
                            </div>
                            <div class="social-media">
                                <div class="social-account">
                                    <h3><a href="https://www.instagram.com/amrita_rao_insta/?hl=en">Instagram</a></h3>
                                </div>
                                <div class="hiring-price">
                                    <h3><i class="fa-solid fa-indian-rupee-sign"></i>70,000</h3>
                                </div>
                            </div>
                            <div class="influencer-about">
                                <p>Bhuvan Bam is an actor, singer-songwriter, comedian and entrepreneur</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div id="find-inflanar">
                <div id="find-brands">
                    <div class="find-brand-image-container">
                        <div id="find-brand-image-1">
                            <img src={picture2} alt="Image 1" class="image1" />
                        </div>
                        <div id="find-brand-image-2">
                            <img src={picture1} alt="Image 2" class="image2" />
                        </div>
                        <div id="find-brand-image-3">
                            <img src={picture3} alt="Image 2" class="image2" />
                        </div>
                    </div>
                    <div class="find-inflanar-content">
                        <div class="find-inflanar-button">
                            <button>
                                Find Brands
                            </button>
                        </div>
                        <div class="find-inflanar-words">
                            <h2>
                                They Could Be Looking For Someone Like You.
                            </h2>
                        </div>
                        <div class="find-inflanar-check-now">
                            <button>
                                Check Now
                            </button>
                        </div>
                    </div>
                </div>

                <div id="find-influencer">
                    <div class="find-brand-image-container">
                        <div id="find-influencer-image-1">
                            <img src={picture1} alt="Image 1" class="image1" />
                        </div>
                        <div id="find-influencer-image-2">
                            <img src={picture3} alt="Image 2" class="image2" />
                        </div>
                    </div>
                    <div class="find-inflanar-content">
                        <div class="find-inflanar-button">
                            <button>
                                Find Influencers
                            </button>
                        </div>
                        <div class="find-inflanar-words">
                            <h2>
                                Manage Your Creators And Campaigns In platform
                            </h2>
                        </div>
                        <div class="find-inflanar-check-now">
                            <button>
                                Check Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="home-opinion">
                <div id="opinion-part-1">
                    <div id="opinion-text1">
                        <h1>
                            We Care About your opinion
                        </h1>
                        <p>
                            We have a lot of opportunities for you. Come check them!
                        </p>
                    </div>
                    <div id="opinion-part-1-img-1">
                        <img src={picture2} alt="" />
                    </div>
                </div>


                <div id="opinion-part-2">

                    <div class="opinion-part-2-box">
                        <div class=" opinion-icon-box">
                            <div class="opinion-icon-div">

                                <div class="opinion-icon">
                                    <div class="opinion-icon-img">

                                        <img src="https://logowik.com/content/uploads/images/563_facebook_like.jpg" alt="" />
                                    </div>
                                </div>
                                <div id="opinion-part-2-marketer-1">
                                    <h1>Martin Culish</h1>
                                    <p>Digital Marketer</p>
                                </div>

                            </div>
                        </div>
                        <div class="opinion-about-marketer">
                            <div class="opinion-about-marketer-div">

                                <h3>Bring to the table win-win survival strategies to ensure proactive domination. At the
                                    end of the day, going forward, a new normal that has evolved from generation X is on the
                                    runway heading towards a streamlined cloud solution. User generated content in real-time
                                    will have multiple touchpoints for offshoring.</h3>
                            </div>
                        </div>
                    </div>
                    <div class="opinion-part-2-box">
                        <div class=" opinion-icon-box">
                            <div class="opinion-icon-div">
                                <div class="opinion-icon">
                                    <div class="opinion-icon-heart">

                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL412QsdC-rc49c_tzNjvjO5A8oWjQTVaw9A&s"
                                            alt="" />
                                    </div>
                                </div>
                                <div id="opinion-part-2-marketer-2">
                                    <div id="opinion-marketer-text">

                                        <h1>Naren Doe</h1>
                                        <p>Digital Marketer</p>
                                    </div>

                                </div>
                                <div id="opinion-part-2-img-1">
                                    <img src={picture1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="opinion-about-marketer">
                            <div class="opinion-about-marketer-div">
                                <h3>Bring to the table win-win survival strategies to ensure proactive domination. At the
                                    end of the day, going forward, a new normal that has evolved from generation X is on the
                                    runway heading towards a streamlined cloud solution. User generated content in real-time
                                    will have multiple touchpoints for offshoring.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="opinion-part-3">
                    <div id="opinion-part-3-img-1">
                        <img src={picture2} alt="" />
                    </div>
                    <div id="opinion-part-3-img-2">
                        <img src={picture3} alt="" />
                    </div>
                    <div id="opinion-part-3-btn">
                        <button>
                            <h3>View More</h3>
                        </button>
                    </div>
                </div>
            </div>

            <div id="latest-news">
                <div id="latest-news-text">
                    <div id="latest-news-text-1">
                        <h1>Latest News </h1>
                        <br />
                        <p>We have a lot of opportunities for you.Come check then!</p>
                    </div>
                    <div id="latest-news-view">
                        <div><a href="latest-news-viewall">View All</a></div>
                    </div>

                </div>


                <div class="latest-news-inflanar">
                    <hr />
                    <div class="latest-news-inflanar-1">
                        <div class="news-inflanar">
                            <div class="news-inflanar-body">
                                <div class="news-inflanar-image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBX903JmnpnjxAmGaQg6xt0zzaXWUTQx41g&s"
                                        alt="" />
                                </div>
                                <div class="news-inflanar-text-1">
                                    <h4>INFLUENCER / 25 MAY 2023</h4>
                                </div>
                                <div class="news-inflanar-text-2">
                                    <h2>Influencer Is a Real Job.Its's Time to Act Like It and own it </h2>
                                </div>
                                <div class="news-inflanar-text-3">
                                    <p>
                                        Bring to the table win-win survival </p>
                                    <p>
                                        strategies to ensure proactive domination.
                                    </p>
                                    <p>
                                        At the end of the...
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="news-inflanar">
                            <div class="news-inflanar-body">
                                <div class="news-inflanar-image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0U0a7LzhNdgsVkWxBVQolvUgwgsCVVsaHyQ&s"
                                        alt="" />
                                </div>
                                <div class="news-inflanar-text-1">
                                    <h4>INFLUENCER / 25 MAY 2023</h4>
                                </div>
                                <div class="news-inflanar-text-2">
                                    <h2>Influencer Is a Real Job.Its's Time to Act Like It and own it </h2>
                                </div>
                                <div class="news-inflanar-text-3">
                                    <p>
                                        Bring to the table win-win survival </p>
                                    <p>
                                        strategies to ensure proactive domination.
                                    </p>
                                    <p>
                                        At the end of the...
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div class="news-inflanar">
                            <div class="news-inflanar-body">
                                <div class="news-inflanar-image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmNgy6nI_MS-63-aJsTaxMixgBvS83Txb6A&s"
                                        alt="" />
                                </div>
                                <div class="news-inflanar-text-1">
                                    <h4>INFLUENCER / 25 MAY 2023</h4>
                                </div>
                                <div class="news-inflanar-text-2">
                                    <h2>Influencer Is a Real Job.Its's Time to Act Like It and own it </h2>
                                </div>
                                <div class="news-inflanar-text-3">
                                    <p>
                                        Bring to the table win-win survival </p>
                                    <p>
                                        strategies to ensure proactive domination.
                                    </p>
                                    <p>
                                        At the end of the...
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </div>
        </div>

    );
};

export default Home;
