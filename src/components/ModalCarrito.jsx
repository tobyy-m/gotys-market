import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function ModalCarrito({ mostrar, cerrarModal }) {

    

    return (
        <Modal show={mostrar} onHide={cerrarModal} centered size="lg" contentClassName="modal-carrito">
            <Modal.Header closeButton>
                <Modal.Title>Tu Carrito</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center align-items-center">
                    <p>La card del carrito</p>
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <Button className="boton-secundario " as={Link} to="/carrito" onClick={cerrarModal}>Finalizar compra</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalCarrito
