import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import  ModalMovie from './ModalMovie' ;
import './Movie.css'
function Movie(props) {
    const [showFlag,setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleShow = (item) =>{
        console.log(item);
        setClickedMovie(item);
        setShowFlag(true);
    }

    const handleclose = () =>{
        setShowFlag(false);
    }

    const [newMovie, setnewMovie] = useState({});

    //const [comment, setComment] = useState("");

    const commentHandler = async (itemm)=>{
        props.item.comment =  itemm ;
    }

    const sendReqToDatabase = async (item) => {
        const serverURL = `http://localhost:4000/addMovie`;
        const response = await fetch(serverURL,{method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })

      .then((response) => response.json())
      .then((data) => {
         console.log(data);
         // Handle data
      })
      .catch((err) => {
         console.log(err.message);
      });

        const data = await response.json();
        //console.log(data)
        setnewMovie(data);
    }


    return (
        <div key={props.item.id}>
         
            <Row xs={1} md={4} className="g-4">
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+props.item.poster_path}/>
                        <Card.Body>
                            <Card.Title>
                                <h2>{props.item.title} </h2>
                                <h4>{props.item.id} </h4> </Card.Title>
                            <Card.Text>
                                <p>{props.item.release_date}</p>
                                <p>{props.item.overview}</p>
                                <textarea  value={props.item.comment}
                  onChange={(e) => commentHandler(e.target.value)}> Add comment here </textarea>
                            </Card.Text>
                            <Button variant="primary"  onClick={() => {handleShow(props.item); sendReqToDatabase(props.item)}}>Add it to Favorite</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ModalMovie showFlag={showFlag} handleclose={handleclose} movieData={clickedMovie}/>
        </div>
    );






}


export default Movie;
