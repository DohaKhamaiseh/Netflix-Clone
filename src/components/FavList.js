import Movie from './Movie';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import ModalFav from './ModalFav' ;

function FavList (){
const [showFlag,setShowFlag] = useState(false);
const [favArr, setfavArr] = useState([]);
const [clickedMovie, setclickedMovie] = useState({});
const handleShow = (item
    ) =>{
       
    setShowFlag(true);
    setclickedMovie(item);
   // console.log(item) ;
}

const handleclose = () =>{
    setShowFlag(false);
}
const takeNewArrFromChild = (arr) => {
    // console.log("parent Comp",arr);
    // props.takeNewArr(arr);
    setfavArr(arr);
}


const sendReqFav = async () => {
    //console.log(process.env.REACT_APP_Deploy_URL);
    const serverURL = `${process.env.REACT_APP_Deploy_URL}/getMovies`;
    const response = await fetch(serverURL);
    //console.log(response);
    const data = await response.json();
    //console.log(data)
    setfavArr(data);
}

useEffect(()=>{
    sendReqFav();
  
}, [])
//console.log(favArr);
return (
    <div >
          <Row xs={1} md={5} className="g-4">
    
          {favArr.map((item) => {
              // console.log(item) ;
             return <Col>
                <Card style= {{ width: '18rem'}} >
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+item.poster_path}/>
                    <Card.Body>
                        <Card.Title>
                            <h2>{item.title} </h2>
                            <h4>{item.id} </h4> </Card.Title>
                        <Card.Text>
                            <p>{item.release_date}</p>
                            <p>{item.overview}</p>
                            <p>{item.comment}</p>
                        </Card.Text>
                        <Button variant="success"  onClick={() => {handleShow(item)}}>Update</Button>
                                <Button variant="danger">Delete</Button>
                      
                    </Card.Body>
                </Card>
            </Col>
        
    })}
    <ModalFav showFlag={showFlag} handleclose={handleclose} favArr={favArr} takeNewArrFromChild={takeNewArrFromChild} clickedMovie={clickedMovie}/>
            
    </Row>
    
      
    </div>
) ;
}
export default FavList ;