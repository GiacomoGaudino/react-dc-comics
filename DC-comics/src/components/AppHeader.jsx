import DcLogo from '../assets/img/dc-logo.png'
export default function AppHeader() {

    return (

        <header>
            <div className="container">
                <div id="header-inner">
                    <img src={DcLogo} alt="DC-logo" />
                    <nav>
                        <a href="">character</a>
                        <a href="">comics</a>
                        <a href="">movies</a>
                        <a href="">tv</a>
                        <a href="">games</a>
                        <a href="">collectibles</a>
                        <a href="">videos</a>
                        <a href="">fans</a>
                        <a href="">news</a>
                        <a href="">shop</a>
                    </nav>
                </div>
            </div>
        </header>


    )
}