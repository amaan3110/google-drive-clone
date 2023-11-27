import React from 'react'
import './sidebar.scss'
import 'boxicons'
import { Modal } from '@mui/material'
import { storage } from '../../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const sidebar = () => {

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }

    const handleUpload = (event) => {
        event.preventDefault();

        if (!file) {
            toast.error('please upload file');
        }
        else {
            setUploading(true);
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    setPercent(percent);
                    setFile(null);
                }
            )
        }

    }

const notify = () => toast.error("Service Unavailable !");

const [open, setOpen] = React.useState(false);
const [uploading, setUploading] = React.useState(false);
const [file, setFile] = React.useState(null);
const [percent, setPercent] = React.useState(0);
const handleOpen = () => setOpen(true);
const handleClose = () => {
    setOpen(false);
    setUploading(false);
}
return (
    <>
        <Modal open={open} onClose={handleClose}>
            <div className="popup">
                {
                    uploading ? (<p className='uploading'>Uploading File... {percent} %</p>) :
                        (
                            <>
                                <input type="file" onChange={handleChange} />
                                <input type="submit" className='button' onClick={handleUpload} />
                            </>
                        )
                }

            </div>
        </Modal>
        <div className="sidebar">
            <div className="button">
                <button onClick={handleOpen}>
                    <box-icon name='plus'></box-icon>
                    New
                </button>
            </div>
            <div className="copm">
                <button>
                    <box-icon name='home' type='solid' ></box-icon>
                    Home
                </button>
                <button>
                    <box-icon name='hdd'></box-icon>
                    My Drive
                </button>
                <button>
                    <box-icon name='laptop'></box-icon>
                    Computers
                </button>
                <button>
                    <box-icon name='trash'></box-icon>
                    Trash
                </button>
                <button>
                    <box-icon name='cloud' ></box-icon>
                    Storage
                </button>
            </div>

            <div className="strg">
                <button onClick={notify}>
                    Get more storage
                </button>
            </div>
        </div>
        <ToastContainer />
    </>
)
}

export default sidebar