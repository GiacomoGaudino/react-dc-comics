import facebookLogo from '../assets/img/footer-facebook.png';
import periscopeLogo from '../assets/img/footer-periscope.png';
import pinterestLogo from '../assets/img/footer-pinterest.png';
import twitterLogo from '../assets/img/footer-twitter.png';
import youtubeLogo from '../assets/img/footer-youtube.png';

export default function AppFooter() {

    return (

        <footer>
            <div className="container">
                <div className="d-flex">
                    <div>
                        <button>SIGN-UP NOW!</button>
                    </div>
                    <div className="social">
                        <h3>FOLLOW US</h3>
                        <a href="">
                            <img src={facebookLogo} alt="facebook-logo" />
                        </a>
                        <a href="">
                            <img src={periscopeLogo} alt="periscope-logo" />
                        </a>
                        <a href="">
                            <img src={pinterestLogo} alt="pinterest-logo" />
                        </a>
                        <a href="">
                            <img src={twitterLogo} alt="twitter-logo" />
                        </a>
                        <a href="">
                            <img src={youtubeLogo} alt="youtube-logo" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}