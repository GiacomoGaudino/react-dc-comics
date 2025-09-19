import DcBigLogo from '../assets/img/dc-logo-bg.png';

export default function AppJumbotron() {

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="jumbo-flex">
                    <div id="list">
                        <div>
                            <h3>dc comics</h3>
                            <ul>
                                <li><a href="">Characters</a></li>
                                <li><a href="">Comics</a></li>
                                <li><a href="">Movies</a></li>
                                <li><a href="">Tv</a></li>
                                <li><a href="">Games</a></li>
                                <li><a href="">Videos</a></li>
                                <li><a href="">News</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>shop</h3>
                            <ul>
                                <li><a href="">Shop DC</a></li>
                                <li><a href="">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>dc</h3>
                            <ul>
                                <li><a href="">Terms Of Use</a></li>
                                <li><a href="">Privacy Police &#40;New&#41;</a></li>
                                <li><a href="">AdChoices</a></li>
                                <li><a href="">Advertising</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Subscriptions</a></li>
                                <li><a href="">Talent Workshops</a></li>
                                <li><a href="">CPSC Certificates</a></li>
                                <li><a href="">Ratings</a></li>
                                <li><a href="">Shop Help</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>sites</h3>
                            <ul>
                                <li><a href="">DC</a></li>
                                <li><a href="">MAD Magazine</a></li>
                                <li><a href="">DC Kids</a></li>
                                <li><a href="">DC Universe</a></li>
                                <li><a href="">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img id="bigLogo" src={DcBigLogo} alt="DC-big-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}