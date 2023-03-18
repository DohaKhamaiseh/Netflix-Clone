import Movie from './Movie';
import Row from 'react-bootstrap/Row';

function MovieList(props) {

    return (
        <div >
             <Row xs={1} md={5} className="g-4">
            {props.moviesArr.map((item) => {
              // console.log(item) ;
             return <Movie  item={item} />

            })}
</Row>
        </div>
    );

}



export default MovieList;