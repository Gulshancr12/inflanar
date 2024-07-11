import React, { useState } from 'react';
import './profile.css'
import profileImg from '../influencer/image1.jpeg';
import icon1 from './facebook-logo.png';
import icon2 from './instagram-logo.png';
import icon3 from './tiktok-logo.png';
import icon4 from './twitter-logo (1).png';
import { IoStar } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoPricetag } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import gamimgStreamImg from '../influencer/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg';
import blog1img from './blog.webp'
import block1img from './block-1-img.webp';
import block2img from './block-2-img.jpeg';
import vlog1img from './vlog-1-img.webp';
import vlog3img from './vlog3img.webp';
// import { FaRegHeart } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from 'react-icons/fa';




function Profile() {

    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <>
            <div className='Profile-page'>
                <div className='page-header'>

                </div>

                <div className='content'>
                    <div className='sidebar'>
                        <div id='profile-img'>
                            <div id='img'>
                                <img src={profileImg} alt='' />
                            </div>
                            <div id='engagement'>
                                <div id='followers'>
                                    <h5>23.9k</h5>
                                    <p>Followers</p>
                                </div>
                                <div id='following'>
                                    <h5>15k</h5>
                                    <p>Following</p>
                                </div>

                            </div>

                        </div>
                        <div className='brief-content'>
                            <p>Triggered Insaan, also known as Nischay Malhan, is a popular Indian YouTuber renowned for his comedic and relatable content. With his sharp wit and engaging personality, he influences the public by addressing everyday situations and societal issues through humor and satire. His ability to connect with a diverse audience, combined with his consistent content quality, has garnered him a massive following. Triggered Insaan's impact extends beyond entertainment, as he often promotes positive values and awareness on various topics. His authentic and approachable style makes him a significant influencer in the digital space.</p>
                        </div>
                        <div className='skill-content'>
                            <h3>Skills</h3>
                            <button className='skill-button'>Life Style</button>
                            <button className='skill-button'>Vlogger</button>
                            <button className='skill-button'>Gaming</button>
                            <button className='skill-button'>YouTuber</button>
                            <button className='skill-button'>Influencer</button>

                        </div>
                        <div className='contact-info'>
                            <h3>Contact</h3>
                            <div id='contact-no'>
                                <div className='contact-icon'><FaPhoneAlt /></div>
                                <div className='contact-no'>9863429475</div>
                            </div>
                            <div id='mail'>
                                <div className='contact-icon'><MdMail /></div>
                                <div className='contact-mail'>triggeredinsan234@gmail.com</div>
                            </div>
                            <div id='address'>
                                <div className='contact-icon'><IoLocationSharp /></div>
                                <div className='contact-address'>Mumbai,India</div>
                            </div>

                        </div>

                    </div>

                    <div className='main-content'>
                        <div className='header-content'>
                            <div id='profile-detail'>
                                <button className='ytbutton'>Youtuber</button>
                                <div id='profile-name'><h1>Nischay Malhan</h1></div>
                                <div id='profile-rating'><IoStar /> Reviews
                                </div>
                            </div>
                            <div id='social'>
                                <div><button className='hireme'>Hire Me Now</button></div>
                                <div><button className='follow'>Follow</button></div>
                                <div className='social-icons'>
                                    <div id='icon1'>
                                        <img src={icon1} alt='' />
                                    </div>
                                    <div id='icon2'>
                                        <img src={icon2} alt='' />
                                    </div>
                                    <div id='icon3'>
                                        <img src={icon3} alt='' />
                                    </div>
                                    <div id='icon4'>
                                        <img src={icon4} alt='' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='jobStatus'>
                            <div id='active-job'>
                                <h4>Active Job</h4>
                                <h3>4</h3>
                            </div>
                            <div id='pending-job'>
                                <h4>Pending Job</h4>
                                <h3>1</h3>
                            </div>
                            <div id='cancel-job'>
                                <h4>Cancel Job</h4>
                                <h3>0</h3>
                            </div>
                            <div id='complete-job'>
                                <h4>Complete Job</h4>
                                <h3>4</h3>
                            </div>

                        </div>
                        <div className='vlog-section'>
                            <div id='block-1'>
                                <img src={block1img} alt='' />
                            </div>
                            <div id='block-2'>
                                <img src={block2img} alt='' />
                            </div>
                            <div id='block-3'>
                                <div id='vlog-1'>
                                    <img src={vlog1img} alt='' />
                                </div>
                                <div id='vlog-2'>
                                    <img src={blog1img} alt='' />
                                </div>
                                <div id='vlog-3'>
                                    <img src={vlog3img} alt='' />

                                </div>
                            </div>

                        </div>

                        <div className='services'>
                            <h2>Services</h2>
                            <div id='row-1'>
                                <div id='service-1'>
                                    <div id='upper-part'>
                                        <img src={gamimgStreamImg} alt='' />
                                        <div className="overlay">
                                            <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
                                                {liked ? <FaHeart /> : <FaRegHeart />}
                                            </button>
                                        </div>
                                    </div>
                                    <div id='lower-part'>
                                        <div className='price'>
                                            <div id='tag'><IoPricetag /> Games</div>
                                            <div id='fees'>
                                                <div className='tag-icon'><MdOutlineCurrencyRupee /></div>
                                                <div className='fee-amt'>25000.00</div>
                                            </div>
                                        </div>
                                        <div className='title'>Streams on Gaming</div>
                                        <div className='partition'><hr /></div>
                                        <div className='profile-rating'>
                                            <div id='mini-id'>
                                                <div id='mini-profile'><img src={profileImg} alt='' /></div>
                                                <div id='name'>Nischay Malhan</div>
                                            </div>
                                            <div id='stars'><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /></div>
                                        </div>
                                        <div className='book-now'>
                                            <button >Book Now</button>
                                        </div>


                                    </div>

                                </div>
                                <div id='service-2'>
                                    <div id='upper-part'>
                                        <img src={gamimgStreamImg} alt='' />
                                        <div className="overlay">
                                            <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
                                                {liked ? <FaHeart /> : <FaRegHeart />}
                                            </button>
                                        </div>
                                    </div>
                                    <div id='lower-part'>
                                        <div className='price'>
                                            <div id='tag'><IoPricetag /> Collab</div>
                                            <div id='fees'>
                                                <div className='tag-icon'><MdOutlineCurrencyRupee /></div>
                                                <div className='fee-amt'>75000.00</div>
                                            </div>
                                        </div>
                                        <div className='title'>Brand Collaboration</div>
                                        <div className='partition'><hr /></div>
                                        <div className='profile-rating'>
                                            <div id='mini-id'>
                                                <div id='mini-profile'><img src={profileImg} alt='' /></div>
                                                <div id='name'>Nischay Malhan</div>
                                            </div>
                                            <div id='stars'><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /></div>
                                        </div>
                                        <div className='book-now'>
                                            <button >Book Now</button>
                                        </div>


                                    </div>
                                </div>
                                <div id='service-3'>
                                    <div id='upper-part'>
                                        <img src={gamimgStreamImg} alt='' />
                                        <div className="overlay">
                                            <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
                                                {liked ? <FaHeart /> : <FaRegHeart />}
                                            </button>
                                        </div>
                                    </div>
                                    <div id='lower-part'>
                                        <div className='price'>
                                            <div id='tag'><IoPricetag /> Web shows</div>
                                            <div id='fees'>
                                                <div className='tag-icon'><MdOutlineCurrencyRupee /></div>
                                                <div className='fee-amt'>20000.00</div>
                                            </div>
                                        </div>
                                        <div className='title'>Web shows and Appearances</div>
                                        <div className='partition'><hr /></div>
                                        <div className='profile-rating'>
                                            <div id='mini-id'>
                                                <div id='mini-profile'><img src={profileImg} alt='' /></div>
                                                <div id='name'>Nischay Malhan</div>
                                            </div>
                                            <div id='stars'><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /><MdOutlineStarBorderPurple500 /></div>
                                        </div>
                                        <div className='book-now'>
                                            <button >Book Now</button>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile