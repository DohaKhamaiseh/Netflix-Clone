import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import FavList from "./FavList" ;
function Home() {

    const [moviesArr, setMoviessArr] = useState([]);

    const sendReq = async () => {
        //console.log(process.env.Deploy_URL);
        const serverURL = `${process.env.REACT_APP_Deploy_URL}/trending`;
        const response = await fetch(serverURL);
        //console.log(response);
        const data = await response.json();
        //console.log(data)
        setMoviessArr(data);
    }

    useEffect(()=>{
        sendReq();
      
    }, [])

   

  
   
    return (
        <>
      
            <h1  style= { {fontFamily :"cursive"} }>Movies Home</h1>
          <br/>
          <br/>
          <br/>
            <MovieList moviesArr ={moviesArr}/>
          
      
        </>
    );
}

export default Home;