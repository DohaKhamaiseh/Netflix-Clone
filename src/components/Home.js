import { useEffect, useState } from "react";
import MovieList from "./MovieList";
function Home() {

    const [moviesArr, setMoviessArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `http://localhost:4000/trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        //console.log(data)
        setMoviessArr(data);
    }

    useEffect(()=>{
        sendReq();
    }, [])
    return (
        <>
            <h1>Movies Home</h1>
            {/* <button onClick={sendReq}>send req</button> */}
            <MovieList moviesArr ={moviesArr}/>
      
        </>
    );
}

export default Home;