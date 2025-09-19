import DigitalLogo from '../assets/img/buy-comics-digital-comics.png';
import ComicsMerch from '../assets/img/buy-comics-merchandise.png';
import ShopLocator from '../assets/img/buy-comics-shop-locator.png';
import Subscriptions from '../assets/img/buy-comics-subscriptions.png';
import PowerVisa from '../assets/img/buy-dc-power-visa.svg';

export default function AppIcons() {

    return (
        <section id="blue">
            <div className="container">
                <div className="blue-section">
                    <a href="">
                        <div className="icon">
                            <img id='digital' src={DigitalLogo} alt="digital-comics" />
                            <span>digital comics</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="icon">
                            <img src={ComicsMerch} alt="merchandise" />
                            <span>dc merchandise</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="icon">
                            <img src={Subscriptions} alt="merchandise" />
                            <span>subscriptions</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="icon">
                            <img id='shopLocator' src={ShopLocator} alt="merchandise" />
                            <span>comic shop locator</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="icon">
                            <img src={PowerVisa} alt="merchandise" />
                            <span>dc power visa</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}