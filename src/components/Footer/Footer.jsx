import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="box">
                        <h2>About Us</h2>
                        <p>Maecenas rhoncus dolor nisi, nec lobortis sapien pulvinar ut. Duis dolor lacus, laoreet vel massa a,
                            ultrices varius tellus. Aliquam sed ornare augue. Donec vel molestie quam, eget imperdiet nibh.</p>

                        <p>Sed eu pulvinar ante, sit amet facilisis libero. Fusce placerat, risus at dapibus viverra, diam
                            mauris suscipit augue, a sagittis felis libero in lacus. Sed sit amet erat at augue congue malesuada
                            et eget lacus.</p>
                    </div>
                    <div className="box">
                        <h2>Follow Us</h2>
                        <nav className="social-nav">
                            <a href="http://facebook.com"><FacebookIcon /></a>
                            <a href="http://twitter.com"><InstagramIcon /></a>
                            <a href="http://instagram.com"><TwitterIcon /></a>
                        </nav>
                    </div>
                </div>
                <p className="copyright">Job Careers &copy; </p>
            </footer>
        </div>
    )
}
