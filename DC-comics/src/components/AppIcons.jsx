import Icon from './Icon';
import Icon_list from '../data/Icon_list';

export default function AppIcons() {

    return (
        <section id="blue">
            <div className="container">
                <div className="blue-section">
                    {Icon_list.map(icon => <Icon image={icon.image} name={icon.name} key={icon.id} />)}
                </div>
            </div>
        </section>
    )
}