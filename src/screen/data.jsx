import React, {useEffect} from 'react'
import './data.scss'
import 'boxicons'
import { storage } from '../../firebase'
import { listAll, ref } from 'firebase/storage'

const data = () => {

    const [files, setFiles] = React.useState([]);

    useEffect(()=>{
        const fetchFiles = async ()=>{
            const storageRef = ref(storage);
            const filesList = await listAll(storageRef);

            const fileNames = filesList.items.map((item) => item.name);
            setFiles(fileNames);
        };

        fetchFiles();
    }, [])
    return (
        <>
            <div className="data">
                <div className="data-grid">
                    <div className="data-grid-file">
                        <box-icon type='solid' name='file-blank'size='lg'></box-icon>
                        <p>File.docx</p>
                    </div>
                    <div className="data-grid-file">
                        <box-icon type='solid' name='file-blank' size='lg'></box-icon>
                        <p>clg.pdf</p>
                    </div>
                </div>
                <div className="data-row">
                    <div className="data-header">
                        <span><b>Name <box-icon name='down-arrow-alt' ></box-icon></b></span>
                        <span><b>Time</b></span>
                        <span><b>Date</b></span>
                        <span><b>File size</b></span>
                    </div>
                    <div className="file-info">
                        <p><box-icon name='file'></box-icon> img-09939...</p>
                        <p>19:22</p>
                        <p>12/07/2022</p>
                        <p>76.88kb</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default data