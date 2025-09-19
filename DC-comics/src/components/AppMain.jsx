import AppIcons from "./AppIcons";
import AppJumbotron from "./AppJumbotron";
export default function AppMain() {

    return (
        <main>
            <section id="black">
                <div className="container">
                    <div className="black-section">
                        <h2>--&gt; Content goes here &lt;--</h2>
                    </div>
                </div>
            </section>
            <AppIcons />
            <AppJumbotron />
        </main>
    )
}