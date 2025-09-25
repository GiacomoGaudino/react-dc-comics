import DcBigLogo from '../assets/img/dc-logo-bg.png';
import menu from '../data/Menu_footer';

export default function AppJumbotron() {

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="jumbo-flex">
                    <div id="list">
                        {menu.map(menu_item => (
                            <div key={menu_item.id}>
                                <h3>{menu_item.title}</h3>
                                <ul>
                                    {menu_item.list.map(list_item => <li key={list_item.id}><a href={list_item.link}>{list_item.text}</a></li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div>
                        <img id="bigLogo" src={DcBigLogo} alt="DC-big-logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}