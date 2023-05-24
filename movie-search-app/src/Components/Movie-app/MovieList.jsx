import "./MovieList.css"


const MovieList = ({movie}) =>{

const movieCard = movie.map((ele , i) =>{

    const texColor = (ele.vote_average < 5) ? "red" : (ele.vote_average >= 5 && ele.vote_average <= 7) ? "orange" : "green"

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";


    return (
         <div key={i} className="card">
            <div className="imageContainer">
                <img src={IMGPATH + ele.poster_path} alt="" />
            </div>
            <div className="ratingTitle">
                <h4>{ele.title}</h4>
                <h5  style={{color: texColor}}>&#9734; {ele.vote_average }</h5>
            </div>
                <button>Watch Now</button>
        </div>
    )
})

return(
    
    <div style={{width: "90%", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", margin: "30px auto"}}>
    {movieCard}
    </div>
)
    
}
 
export default MovieList;