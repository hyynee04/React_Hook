import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService';
import _ from 'lodash'

const ModalViewUser = (props) => {
    const { show, setShow, dataView } = props;
    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImage("");
        setPreviewImage("");
        props.resetData();
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if(!_.isEmpty(dataView)) {
            //update state
            setEmail(dataView.email);
            setUsername(dataView.username);
            setRole(dataView.role);
            if(dataView.image)
                setPreviewImage(`data:image/jpeg;base64,${dataView.image}`);
        }
    }, [dataView])

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>User's Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row">
                        <div className="col-md-4 g-10">
                            <div className='img-preview img-gap'>
                                {previewImage ?
                                    <img src={previewImage} alt='error' />
                                    :
                                    <span>Preview Image</span>
                                }
                            </div>

                        </div>
                        <div className="col-md-8">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                readOnly
                                value={email}
                            />
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                value={username}
                            />
                            <div className="col-md-6">
                                <label className="form-label">Role</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    readOnly
                                    value={role}
                                />
                            </div>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser;