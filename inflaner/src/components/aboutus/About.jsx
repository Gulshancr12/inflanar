import React from "react";
import "./About.css";
import emoji from "./emoji.png";

import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";
import logo7 from "./logo7.png";
import logo8 from "./logo8.png";
import logo9 from "./logo9.png";
import logo10 from "./logo10.png";
import img1 from "./createCampaign.webp";
import img2 from "./ChooseInfluencerImg.png";
import img3 from "./CampaignMonitorImg.png";
import img4 from "./Step4Img.webp";
import founderImg from "./founderImg.png";
import arrow from "./arrowdown.png"

import background from "./background.png";

import { BsStars } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About us</h1>
        <p>You wanna be imaginative, be attractive and let’s engage.</p>
        <div className="shapes">
          <div className="shape circle"></div>
          <div className="shape square"></div>
          <div className="shape triangle"></div>
        </div>
      </div>
      <div className="about-content">
        <img src={emoji} alt="Emoji" className="about-image" />
        <div className="about-text">
          <h2>Who we are</h2>
          <h3>Today’s a better time to connect with people on social media.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <ul>
            <li>
              <BsStars className="icon" />
              <div>
                <h4>Social Media Promotions</h4>
                <p>
                  Penatibus at tempus ullamcorper cursus imperdiet lectus
                  eleifend dolor eget vulputate
                </p>
              </div>
            </li>
            <li>
              <MdAutoGraph className="icon" />
              <div>
                <h4>Growing & Scale Up Businesses</h4>
                <p>
                  Penatibus at tempus ullamcorper cursus imperdiet lectus
                  eleifend dolor eget vulputate
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="trusted">
        <div className="trusted-small">
          <div className="trusted-text">
            <h2>
              Trusted by 25000+ world-class brands and organistaions of all
              sizes
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio similique quas repellat iste fugit, consectetur quod?
              Quaerat accusamus modi qui, error quam veniam veritatis
              necessitatibus aspernatur. Placeat delectus exercitationem
              voluptatem.
            </p>
          </div>
          <div className="trusted-icons">
            <div className="icon1">
              <img src={logo1} alt="Brand1" />
              <img src={logo2} alt="Brand2" />
              <img src={logo3} alt="Brand3" />
              <img src={logo4} alt="Brand4" />
              <img src={logo5} alt="Brand5" />
            </div>
            <div className="icon2">
              <img src={logo7} alt="Brand7" />
              <img src={logo8} alt="Brand8" />
              <img src={logo9} alt="Brand9" />
              <img src={logo10} alt="Brand10" />
            </div>
          </div>
        </div>
      </div>
      <div className="value-vision">
        <div className="value">
          <div className="value-image">
            <div className="gradient"></div>
            <img src={background} alt="Background" />
            <div className="value-text">
              <h4>Our Value</h4>
              <h1>
                The Fluma Advantage: Transforming <br />
                Brands, Empowering Influencers
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
        <div className="vision-big">
          <div className="vision">
            <a href="/vision" className="vision-item">
              <FaRegEye className="vision-icon" />
              <h3>Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </a>
            <a href="/mission" className="vision-item">
              <IoIosRocket className="vision-icon" />
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </a>
            <a href="/motto" className="vision-item">
              <TbTargetArrow className="vision-icon" />
              <h3>Our Motto</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className='process'>
        <h4>Working Process</h4>
        <h2>How Does It Work?</h2>
        <div className='workflow'>
          <div className='upperRow'>
            <div className='step1img'>
              <img src={img1} alt='' height={240} width={270} />
            </div>
            <div className='step2'>
              <div id='step-2'>
                <div id='step'>Step</div>
                <div id='number'>2</div>
              </div>
              <div id='heading'>Choose Influencer</div>
              <div id='para'>"Discover influencers with the highest engagement rates and authentic content.Choose influencers who align perfectly with your brand values and target audience."</div>
            </div>
            <div className='step3img'>
              <img src={img3} alt='' height={240} width={270} />
            </div>
            <div className='step4'>
              <div id='step-2'>
                <div id='step'>Step</div>
                <div id='number'>4</div>
              </div>
              <div id='heading'>Monitor Your Campaign</div>
              <div id='para'>"Discover influencers with the highest engagement rates and authentic content.Choose influencers who align perfectly with your brand values and target audience."</div>
            </div>
          </div>

          {/* <div className="arrows">
            <img src={arrow} alt="" height={800} width={12200}/>
            <img src={arrow} alt="" />
            <img src={arrow} alt="" />
            <img src={arrow} alt="" />
            
          </div> */}

          <div className='lowerRow'>
            <div className='step1'>
              <div id='step-1'>
                <div id='step'>Step</div>
                <div id='number'>1</div>
              </div>
              <div id='heading'>Create Campaign</div>
              <div id='para'>"Discover influencers with the highest engagement rates and authentic content.Choose influencers who align perfectly with your brand values and target audience."</div>
            </div>
            <div className='step2img'>
              <img src={img2} alt='' height={240} width={270} />
            </div>
            <div className='step3'>
              <div id='step-3'>
                <div id='step'>Step</div>
                <div id='number'>3</div>
              </div>
              <div id='heading'>Monitor Your Campaign</div>
              <div id='para'>"Discover influencers with the highest engagement rates and authentic content.Choose influencers who align perfectly with your brand values and target audience."</div>
            </div>
            <div className='step4img'>
              <img src={img4} alt='' height={240} width={270} />
            </div>
          </div>
        </div>
      </div>
      <div className='founder'>
                <div className='contentContainer'>
                    <h5>MESSAGE FROM FOUNDER</h5>
                    <h2>Unlocking Possibilities with Fluma's Influencer Expertise</h2>
                    <div className='uppercontent'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className='lowerContent'>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum </p>
                    </div>
                    <h4>FOUNDER</h4>
                </div>
                <div className='imgContainer'>
                    <img src={founderImg} alt=''  />
                </div>
            </div>
    </div>
  );
};

export default About;
