

export default function Card(props) {


    return (
        <div className='card'>
            <div className="card-header">
                <a href=""><img src={props.image} alt="" /></a>
            </div>
            <div className="card-body">
                <a href="">{props.name}</a>
            </div>
        </div>
    )
}