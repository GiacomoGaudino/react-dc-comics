import DigitalLogo from '../assets/img/buy-comics-digital-comics.png';
import ComicsMerch from '../assets/img/buy-comics-merchandise.png';
import ShopLocator from '../assets/img/buy-comics-shop-locator.png';
import Subscriptions from '../assets/img/buy-comics-subscriptions.png';
import PowerVisa from '../assets/img/buy-dc-power-visa.svg';
import Icon from './Icon';

export default function AppIcons() {

    return (
        <section id="blue">
            <div className="container">
                <div className="blue-section">
                    <a href="">
                        <Icon image={DigitalLogo} name={'digital comics'} />
                    </a>
                    <a href="">
                        <Icon image={ComicsMerch} name={'DC merchandise'} />
                    </a>
                    <a href="">
                        <Icon image={ShopLocator} name={'subscriptions'} />
                    </a>
                    <a href="">
                        <Icon image={Subscriptions} name={'comic shop locator'} />
                    </a>
                    <a href="">
                        <Icon image={PowerVisa} name={'dc power visa'} />
                    </a>
                </div>
            </div>
        </section>
    )
}