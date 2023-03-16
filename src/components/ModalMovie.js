import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
function ModalMovie (props){

    
return (

    <Modal show={props.showFlag} onHide={props.handleclose}>
    <Modal.Header closeButton>
        <Modal.Title>{props.movieData.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Image src={'https://image.tmdb.org/t/p/w500'+props.movieData.poster_path} width='100%'></Image>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={props.handleclose}>
            Close
        </Button>
    </Modal.Footer>
</Modal>
)



}



export default ModalMovie ;