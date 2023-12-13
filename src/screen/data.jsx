import React, { useEffect } from 'react'
import './data.scss'
import { collection } from 'firebase/firestore'
import { firestore } from '../../firebase'
import { getDocs } from 'firebase/firestore'

const data = () => {

    const [fileData, setFileData] = React.useState([]);

    const fetchFileData = async () => {
        const filesCollection = collection(firestore, 'files');
        const querySnapshot = await getDocs(filesCollection);
        const data = [];

        querySnapshot.forEach((doc) => {
            const file = doc.data();
            data.push({
                fileName: file.fileName,
                downloadURL: file.downloadURL,
                fileSize: file.fileSize,
                timestamp: file.timestamp, 
            });
        });

        setFileData(data);
    };

    useEffect(() => {
        fetchFileData();
    }, []);
    return (
        <>
            <div className="data">
                <div className="data-row">
                    <div className="data-header">
                        <span><b>Name <box-icon name='down-arrow-alt' ></box-icon></b></span>
                        <span><b>Time</b></span>
                        <span><b>Date</b></span>
                        <span><b>File size</b></span>
                        <span><b>View File</b></span>
                    </div>
                    <div>
                        {fileData.map((file, index) => (
                            <div key={index} className="file-info">
                                <div>
                                <p className='fileName'>{file.fileName}</p>
                                <p>{file.timestamp.toDate().toLocaleTimeString()}</p>
                                <p>{file.timestamp.toDate().toLocaleDateString()}</p>
                                <p>{file.fileSize}kb</p>
                                <a href={file.downloadURL} target="_blank" rel="noopener noreferrer">
                                    View File
                                </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default data