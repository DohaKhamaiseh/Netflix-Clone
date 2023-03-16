import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import  ModalMovie from './ModalMovie' ;


function Movie(props) {
    const [showFlag,setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleShow = (item) =>{
        // console.log(item);
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
        const serverURL = `${process.env.REACT_APP_Deploy_URL}/addMovie`;
        const response = await fetch(serverURL,{method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      })

   

        const data = await response.json();
        //console.log(data)
        setnewMovie(data);
    }


    return (
        <div key={props.item.id}>
         
         
                <Col>
                    <Card style= { { width: '18rem', fontFamily :"cursive"} }>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+props.item.poster_path}/>
                        <Card.Body>
                            <Card.Title  style= { {  color :'#3A98B9'} }>
                                <h2>{props.item.title} </h2>
                                <h4>{props.item.id} </h4> </Card.Title>
                            <Card.Text style= { {  color :'#E8D5C4'}}>
                                <p>{props.item.release_date}</p>
                                <p>{props.item.overview}</p>
                                <textarea  DefaultValue={props.item.comment}
                  onChange={(e) => commentHandler(e.target.value)}> Add comment here </textarea>
                            </Card.Text>
                            <Button variant="primary"  onClick={() => {handleShow(props.item); sendReqToDatabase(props.item)}}>Add it to Fav</Button>
                          
                        </Card.Body>
                    </Card>
                </Col>
            
            <ModalMovie showFlag={showFlag} handleclose={handleclose} movieData={clickedMovie}/>
        </div>
    );






}


export default Movie;
