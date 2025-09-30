import AppJumbotron from "./AppJumbotron";
import socials from '../data/Socials';

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
                            {socials.map(social => <a href={social.link} key={social.id}><img src={social.text} alt={social.alt} /></a>)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}