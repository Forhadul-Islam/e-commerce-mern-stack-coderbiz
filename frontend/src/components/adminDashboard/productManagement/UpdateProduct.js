import { Button } from 'antd';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import UpdateForm from './UpdateForm';

const UpdateProduct = ({id}) => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.productReducer);
    const currentProduct = products.find(pd => pd._id === id);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () =>setShow(false);
    return (
        <>
        <Button 
            type="primary"
            success
            onClick={handleShow}
            className="product-management__container--item-operation--delete"
            >
                Update
        </Button>
        <Modal
            className="update-product--modal"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={show} onHide={handleClose}>
             <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Update Product 🌲
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="update-product">
                    <UpdateForm 
                    title = {currentProduct.title} 
                    instructor = {currentProduct.instructor}
                    description = {currentProduct.description}
                    price = {currentProduct.price}
                    sale = {currentProduct.sale? currentProduct.sale *100 : 5}
                    features = {currentProduct.features}
                    id = {id}
                    handleClose={handleClose}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                onClick={handleClose}
                type="primary"
                success
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
      </>
    )
}

export default UpdateProduct
