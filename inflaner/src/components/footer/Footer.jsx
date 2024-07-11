import React from 'react';
import './footer.css';
import logo from './logo.png';
import { RiRecordCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { FaBehance } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <footer class="footer">
        <div class="footer-main">
            <div class="inflanar">
                <div class="footer-logo">
                    <img src={logo} alt=""/>
                </div>

                <div class="footer-content">
                    <h3>Want to Create Something Great Together?</h3>
                </div>
                <div class="footer-icon">
                    
                    <h4><RiRecordCircleLine /> Email: example@email.com</h4>
                </div>
                <div class="footer-icon">
                    
                    <h4><RiRecordCircleLine /> Mobile: +1778-344-544</h4>
                </div>

            </div>
            <div class="Quick-linking">
                <div class="quick-link">
                    <h1>Quick Links</h1>
                </div>
                <div class="quick-link-parts">
                    <div class="quick-link-part1">
                        <Link href="#">About Us</Link>
                        <br />
                        <Link href="#">Influencers</Link>
                        <br />
                        <Link href="#">services</Link>
                        <br />
                        <Link href="#">Pages</Link>
                        <br />
                        <Link href="#">Contact</Link>
                        <br />
                    </div>
                    <div class="quick-link-part2">
                        <Link href="#">Signup</Link>
                        <br />
                        <Link href="#">Login</Link>
                        <br />
                        <Link href="#">services</Link>
                        <br />
                        <Link href="#">Influencers</Link>
                        <br />
                        <Link href="#">FAQs</Link>
                    </div>
                </div>
            </div>
            <div class="working-hours">
                <div class="working-time">
                    <h1>Working Hour</h1>
                </div>
                <div class="footer-icon-timer">
                   
                    <h4><RiRecordCircleLine />Mon - Fri: 7:00 AM - 6:00 PM</h4>
                </div>
                <div class="footer-icon-timer">
                    
                    <h4><RiRecordCircleLine />Sat: 7:00 AM - 6:00 PM </h4>
                </div>
                <div class="location">
                    <h1>Our Location</h1>
                </div>
                <div class="local-area">
                    <h4>
                        White Street Night Road N/A 12 Constance Street London E16 2DQ
                    </h4>
                </div>
            </div>
        </div>
        <div class="footer-2">
            <div class="copyright">
                <hr/>
                <h4>Copyright © 2024 inflanar All Rights Reserved.</h4>
            </div>
            <div class="footer-2-icon">

                <div class="footer-2-icon-item"><SiTwitter /></div>
                <div class="footer-2-icon-item"><FaInstagram /></div>
                <div class="footer-2-icon-item"><FaLinkedin /></div>
                <div class="footer-2-icon-item"><FaBehance /></div>
                <div class="footer-2-icon-item"><FaFacebookF /></div>

            </div>
        </div>
    </footer>
    </footer>
  );
};

export default Footer;
