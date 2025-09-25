import DcLogo from '../assets/img/dc-logo.png';
import menu from '../data/Menu_header';


export default function AppHeader() {

    return (
        <header>
            <div className="container">
                <div id="header-inner">
                    <img src={DcLogo} alt="DC-logo" />
                    <nav>
                        {menu.map(item => <a href={item.link} key={item.id}>{item.text}</a>)}
                    </nav>
                </div>
            </div>
        </header>
    )
}