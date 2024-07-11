import React from 'react'
import './influencer.css'
import headerBG from './bannerimage.png'
import { Link } from 'react-router-dom'
import icon1 from './facebook-logo.png'
import icon2 from './instagram-logo.png'
import icon3 from './tiktok-logo.png'
import img2 from './img2.webp'
import img3 from './image3.webp'
import img4 from './image4.jpg'

/* Profile images*/
import img1 from './image1.jpeg'

const Influencer = () => {
    return (
        <>
            <div className='influencer'>
                <div className='influencer-Header'>
                    <div className='part-1'>
                        <h1>Influencers</h1>
                    </div>
                    <div className='part-2'>
                        <div className='icons'>
                            <div id='fb'><img src={icon1} alt='' /></div>
                            <div id='insta'><img src={icon2} alt='' /></div>
                        </div>
                        <div id='header-img'><img src={headerBG} alt='' /></div>
                        <div className='icons'>
                            <div id='tiktok'><img src={icon3} alt='' /></div>
                            {/* <div id='twitter'><img src={icon3} alt=''/></div> */}
                        </div>
                    </div>
                </div>

                <div className='influencer-cards'>
                    <div id='influencer-card1'>
                        <div className='upper-half'>
                            <div id='img-container'>
                                <img src={img1} alt='' />
                            </div>
                            <div className='content-container'>
                                <h4>Nishchay Malhan</h4>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className='lower-half'>
                            <div className='engagement-container'>
                                <div id='followers'>
                                    <h5>20.8M</h5>
                                    <p>Followers</p>
                                </div>
                                <hr/>
                                <div id='following'>
                                    <h5>356</h5>
                                    <p>Following</p>
                                </div>
                            </div>
                            <hr />
                            <div className='view-profile'>
                                <button >
                                  <Link id='link' to = '/profile'>View Profile</Link>  
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div id='influencer-card2'>
                        <div className='upper-half'>
                            <div id='img-container'>
                                <img src={img3} alt='' />
                            </div>
                            <div className='content-container'>
                                <h4>Brinda Sharma</h4>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className='lower-half'>
                            <div className='engagement-container'>
                                <div id='followers'>
                                    <h5>20.8M</h5>
                                    <p>Followers</p>
                                </div>
                                <hr/>
                                <div id='following'>
                                    <h5>356</h5>
                                    <p>Following</p>
                                </div>
                            </div>
                            <hr />
                            <div className='view-profile'>
                                <button >View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div id='influencer-card3'>
                        <div className='upper-half'>
                            <div id='img-container'>
                                <img src={img2} alt='' />
                            </div>
                            <div className='content-container'>
                                <h4>Kusha Kapila </h4>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className='lower-half'>
                            <div className='engagement-container'>
                                <div id='followers'>
                                    <h5>20.8M</h5>
                                    <p>Followers</p>
                                </div>
                                <hr/>
                                <div id='following'>
                                    <h5>356</h5>
                                    <p>Following</p>
                                </div>
                            </div>
                            <hr />
                            <div className='view-profile'>
                                <button >View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div id='influencer-card4'>
                        <div className='upper-half'>
                            <div id='img-container'>
                                <img src={img4} alt='' />
                            </div>
                            <div className='content-container'>
                                <h4>Ranveer Allahbadia</h4>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className='lower-half'>
                            <div className='engagement-container'>
                                <div id='followers'>
                                    <h5>20.8M</h5>
                                    <p>Followers</p>
                                </div>
                                <hr/>
                                <div id='following'>
                                    <h5>356</h5>
                                    <p>Following</p>
                                </div>
                            </div>
                            <hr />
                            <div className='view-profile'>
                                <button >View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='influencer-cards'>
                    <div id='influencer-card1'>
                        <div className='upper-half'>
                            <div id='img-container'>
                                <img src={img1} alt='' />
                            </div>
                            <div className='content-container'>
                                <h4>Nishchay Malhan</h4>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className='lower-half'>
                            <div className='engagement-container'>
                                <div id='followers'>
                                    <h5>20.8M</h5>
                                    <p>Followers</p>
                                </div>
                                <hr/>
                                <div id='following'>
                                    <h5>356</h5>
                                    <p>Following</p>
                                </div>
                            </div>
                            <hr />
                            <div className='view-profile'>
                                <button >View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div id='influencer-card2'>
                        <div className='upper-half'>
                            <div id='img-container'>
                                <img src={img3} alt='' />
                            </div>
                            <div className='content-container'>
                                <h4>Brinda Sharma</h4>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className='lower-half'>
                            <div className='engagement-container'>
                                <div id='followers'>
                                    <h5>20.8M</h5>
                                    <p>Followers</p>
                                </div>
                                <hr/>
                                <div id='following'>
                                    <h5>356</h5>
                                    <p>Following</p>
                                </div>
                            </div>
                            <hr />
                            <div className='view-profile'>
                                <button >View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div id='influencer-card3'>
                        <div className='upper-half'>
                            <div id='img-container'>
                                <img src={img2} alt='' />
                            </div>
                            <div className='content-container'>
                                <h4>Kusha Kapila </h4>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className='lower-half'>
                            <div className='engagement-container'>
                                <div id='followers'>
                                    <h5>20.8M</h5>
                                    <p>Followers</p>
                                </div>
                                <hr/>
                                <div id='following'>
                                    <h5>356</h5>
                                    <p>Following</p>
                                </div>
                            </div>
                            <hr />
                            <div className='view-profile'>
                                <button >View Profile</button>
                            </div>
                        </div>
                    </div>
                    <div id='influencer-card4'>
                        <div className='upper-half'>
                            <div id='img-container'>
                                <img src={img4} alt='' />
                            </div>
                            <div className='content-container'>
                                <h4>Ranveer Allahbadia</h4>
                                <p>Youtuber</p>
                            </div>
                        </div>
                        <div className='lower-half'>
                            <div className='engagement-container'>
                                <div id='followers'>
                                    <h5>20.8M</h5>
                                    <p>Followers</p>
                                </div>
                                <hr/>
                                <div id='following'>
                                    <h5>356</h5>
                                    <p>Following</p>
                                </div>
                            </div>
                            <hr />
                            <div className='view-profile'>
                                <button >View Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='morePages'>
                    <div className='pgs'>01</div>
                    <div className='pgs'>02</div>

                </div>
            </div>
        </>
    )
}

export default Influencer