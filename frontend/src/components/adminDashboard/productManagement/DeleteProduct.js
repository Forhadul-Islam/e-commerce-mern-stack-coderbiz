import { Button } from 'antd';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../redux/actions/productActions';

const DeleteProduct = ({id}) => {
    const {products} = useSelector(state => state.productReducer)
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleDeleteProduct = async () =>{
        setLoading(true)
       await dispatch(deleteProduct(id, products))
       await setLoading(false)
       await handleClose()
       
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button 
            type="primary"
            onClick={handleShow}
            danger
            className="product-management__container--item-operation--delete"
            >
                Delete
        </Button>
        <Modal
            className="delete"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={show} onHide={handleClose}>
        
        <div className="delete-modal">
            <div className="delete-modal--title">
                Delete Product!🔥
            </div>
            <div className="delete-modal--body">
                Make sure you want to delete this product!
            </div>
            <div className="delete-modal--action">
                <Button type="primary"  onClick={handleClose}>
                    Cancel
                </Button>
                <Button 
                    type="primary" 
                    danger 
                    loading={loading}
                    onClick={handleDeleteProduct}>
                        Delete
                </Button>
            </div>
        </div>
        </Modal>
      </>
    )
}

export default DeleteProduct
