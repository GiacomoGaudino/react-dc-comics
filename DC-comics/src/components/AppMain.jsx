import AppIcons from "./AppIcons";
import Card from "./Card";
import comics from '../assets/comics';

export default function AppMain() {

    return (
        <main>
            <section id="black"></section>
            <div id="banner">
                <div className="container">
                    <h2>CURRENT SERIES</h2>
                    <div className="black-section">
                        {comics.map(comic => <Card image={comic.thumb} name={comic.series} />)}
                    </div>
                </div>
            </div>
            <AppIcons />
        </main>
    )
}