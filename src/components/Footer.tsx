
import logo from '../assets/logo-white.svg';
import fbIcon from '../assets/icon-facebook.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import pinterestIcon from '../assets/icon-pinterest.svg'
import instaIcon from '../assets/icon-instagram.svg'

const imgs = [fbIcon, twitterIcon, pinterestIcon, instaIcon]

const Footer = () => {
    return (
        <footer className="bg-VdarkViolet py-10 flex flex-col gap-y-10 items-center text-white lg:flex-row lg:px-40 lg:justify-between lg:items-start">
            <img src={logo} alt='logo iamge' />

            <div className="features text-center lg:text-left">
                <h4 className="font-bold pb-3">Features</h4>

                <ul className='text-grey flex flex-col gap-y-2'>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>

            <div className="resources text-center lg:text-left">
                <h4 className="font-bold pb-3">Resources</h4>

                <ul className='text-grey flex flex-col gap-y-2'>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>

            <div className="company text-center lg:text-left">
                <h4 className="font-bold pb-3">Company</h4>

                <ul className='text-grey flex flex-col gap-y-2'>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="iconsCtn flexCenter gap-x-7">
                {imgs.map(img => (
                    <img src={img} alt="icon" />
                ))}
            </div>


        </footer>
    );
};

export default Footer;