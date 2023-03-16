import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function ModalFav(props) {

    const updateComm = async (e) =>{
        e.preventDefault();
        const obj = {
            id : e.target.Id.value,
            title: e.target.title.value,
            release_date : e.target.date.value,
            poster_path: e.target.poster.value,
            overview : e.target.desc.value,
            comment : e.target.com.value,
        }
console.log(obj);
        const serverURl = `${process.env.REACT_APP_Deploy_URL}/updateMovie/${props.clickedMovie.id}`
        const axiosRes = await axios.put(serverURl,obj);
        console.log(axiosRes.data);
        //close the update modal
        props.handleclose();
        //update the old FavArr
        props.takeNewArrFromChild(axiosRes.data);
        
  
    }
    return (
        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateComm}>
                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control name="Id" type="text" value={props.clickedMovie.id}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control name="title" type="text" value={props.clickedMovie.title}/>
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Release_date</Form.Label>
                        <Form.Control name="date" type="text" value={props.clickedMovie.release_date}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Poster_path</Form.Label>
                        <Form.Control name="poster" type="text" value={props.clickedMovie.poster_path}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Overview</Form.Label>
                        <Form.Control name="desc" type="text" value={props.clickedMovie.overview}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control name="com" type="text" defaultValue={props.clickedMovie.comment}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}



export default ModalFav ;