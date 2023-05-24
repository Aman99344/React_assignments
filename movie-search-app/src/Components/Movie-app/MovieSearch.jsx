import "./MovieSearch.css"
import MovieList from "./MovieList";
import { useEffect, useState } from "react";

const MovieSearch = () => {

    let [movie, setMovie] = useState([])
    let[search, setSearch] = useState("")

    const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

    const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const getMovies = async() =>{
       
      const res = await fetch(APIURL)
      const data = await res.json()

      setMovie(data.results)
    //   console.log(data)

    }

    const searchMovies = async() =>{
        
     const res = await fetch(SEARCHAPI + search)
     const data = await res.json()
         setMovie(data.results)
         console.log(data)
         

    }

    useEffect(() => {
        if(search === ""){
            getMovies()
        }else{
           searchMovies()
        }
        
    },[search])


    return(
        <>
        <div className="container">
             <h1>Movie Search App</h1>
             <input value={search} type="text" onChange={(e)=>{setSearch(e.target.value)}} />
        </div>

        <MovieList movie={movie} />
        </>
        
    )
}

export default MovieSearch;                                                                        




















































































