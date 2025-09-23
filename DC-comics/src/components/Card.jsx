

export default function Card(props) {


    return (
        <div className='card'>
            <div className="card-header">
                <img src={props.image} alt="" />
            </div>
            <div className="card-body">
                <p>{props.name}</p>
            </div>
        </div>
    )
}