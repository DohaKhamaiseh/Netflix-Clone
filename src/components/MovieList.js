import Movie from './Movie';


function MovieList(props) {

    return (
        <div >
            
            {props.moviesArr.map((item) => {
              // console.log(item) ;
             return <Movie  item={item} />

            })}

        </div>
    );

}



export default MovieList;