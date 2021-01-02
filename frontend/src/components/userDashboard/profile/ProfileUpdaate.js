import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { updateUserAction } from '../../../redux/actions/userActions';

const ProfileUpdaate = (props) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userReducer);
    const [newUsername, setNewUsername] = useState(user.username);
    const [newPhone, setNewPhone] = useState(user.phone);
    const handleProfileUpdate = () =>{
        const body ={
            username: newUsername,
            phone: newPhone
        }

        dispatch(updateUserAction(body, user._id))

    }
    return (
        <div className="profile-update">
           <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
               Update your Username and phone number
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleProfileUpdate}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>New Username</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="New username" 
                    value={newUsername}
                    onChange={(e)=>setNewUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>New phone number</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="New Phone" 
                    value={newPhone}
                    onChange={(e)=>setNewPhone(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update now
                </Button>
                </Form>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProfileUpdaate
