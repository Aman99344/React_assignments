import "../Card/Card.css"
const Card = ({name, image, border}) => {

    return (
        <div className="mainContainer" style={{boxShadow: border}} >
            <div className="imgContainer">
                <img src={image} alt="" />
            </div>
            <div className="discription">
                <h3>{name}</h3>
                <p>Male</p>
                <button>Click me</button>
            </div>
        </div>
    )
}

export default Card;