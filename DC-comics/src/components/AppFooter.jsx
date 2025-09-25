import facebookLogo from '../assets/img/footer-facebook.png';
import periscopeLogo from '../assets/img/footer-periscope.png';
import pinterestLogo from '../assets/img/footer-pinterest.png';
import twitterLogo from '../assets/img/footer-twitter.png';
import youtubeLogo from '../assets/img/footer-youtube.png';
import AppJumbotron from "./AppJumbotron";

const socials = [
    {
        id: 1,
        text: facebookLogo,
        link: '#',
        alt: 'facebook.logo'
    },
    {
        id: 2,
        text: periscopeLogo,
        link: '#',
        alt: 'periscope.logo'
    },
    {
        id: 3,
        text: pinterestLogo,
        link: '#',
        alt: 'pinterest.logo'
    },
    {
        id: 4,
        text: twitterLogo,
        link: '#',
        alt: 'twitter.logo'
    },
    {
        id: 5,
        text: youtubeLogo,
        link: '#',
        alt: 'youtube.logo'
    }
]

export default function AppFooter() {

    return (

        <footer>
            <AppJumbotron />
            <div className='footer_end'>
                <div className="container">
                    <div className="d-flex">
                        <div>
                            <button>SIGN-UP NOW!</button>
                        </div>
                        <div className="social">
                            <h3>FOLLOW US</h3>
                            {socials.map(social => <a href={social.link}><img src={social.text} alt={social.alt} /></a>)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}