import DcBigLogo from '../assets/img/dc-logo-bg.png';

const menu = [
    {
        id: 1,
        title: 'dc comics',
        list: [
            {
                id: 1,
                text: 'character',
                link: '#'
            },
            {
                id: 2,
                text: 'comics',
                link: '#'
            },
            {
                id: 3,
                text: 'movies',
                link: '#'
            },
            {
                id: 4,
                text: 'tv',
                link: '#'
            },
            {
                id: 5,
                text: 'games',
                link: '#'
            },
            {
                id: 6,
                text: 'videos',
                link: '#'
            },
            {
                id: 7,
                text: 'news',
                link: '#'
            }
        ]
    },
    {
        id: 2,
        title: 'shop',
        list: [
            {
                id: 1,
                text: 'shop dc',
                link: '#'
            },
            {
                id: 2,
                text: 'shop dc collectibles',
                link: '#'
            }
        ]
    },
    {
        id: 3,
        title: 'dc',
        list: [
            {
                id: 1,
                text: 'term of use',
                link: '#'
            },
            {
                id: 2,
                text: 'privacy police',
                link: '#'
            },
            {
                id: 3,
                text: 'ad choices',
                link: '#'
            },
            {
                id: 4,
                text: 'advertising',
                link: '#'
            },
            {
                id: 5,
                text: 'jobs',
                link: '#'
            },
            {
                id: 6,
                text: 'subscriptions',
                link: '#'
            },
            {
                id: 7,
                text: 'talent workshops',
                link: '#'
            },
            {
                id: 8,
                text: 'cpsc certificates',
                link: '#'
            },
            {
                id: 9,
                text: 'ratings',
                link: '#'
            },
            {
                id: 10,
                text: 'shop help',
                link: '#'
            },
            {
                id: 11,
                text: 'contact us',
                link: '#'
            }
        ]
    },
    {
        id: 4,
        title: 'sites',
        list: [
            {
                id: 1,
                text: 'dc',
                link: '#'
            },
            {
                id: 2,
                text: 'mad magazine',
                link: '#'
            },
            {
                id: 3,
                text: 'dc kids',
                link: '#'
            },
            {
                id: 4,
                text: 'dc universe',
                link: '#'
            },
            {
                id: 5,
                text: 'dc power visa',
                link: '#'
            }
        ]
    }
]

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