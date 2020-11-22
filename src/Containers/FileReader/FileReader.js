import React from "react";
import axios from 'axios';
import { useCookies } from 'react-cookie';

import './FileReader.css';

const re = /(?:\.([^.]+))?$/;

function FileUpload() {
    const [file, setFile] = React.useState("");
    const [token] = useCookies(['theToken']);
    function handleUpload(event) {
        setFile(event.target.files[0]);
    }
    
    function recordSubmit() {
        const report = {
          fileName: file.name,
          fileType: re.exec(file.name)[1],
          location: "test",
          table: "test",
          field: "test",
          category: "Pro"
        };
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token['theToken']}`,
        }
        axios.post('http://127.0.0.1:8000/api/report/', report, {headers})
        .then(response => console.log(response));
    }
    return (
        <div className={"FileReader"}>
            <div id="upload-box">
                <input type="file" onChange={handleUpload} />
                <p>Filename: {file.name}</p>
                <p>File Type: {re.exec(file.name)[1]} file</p>
            </div>
            <div>
                <button onClick={recordSubmit}>
                    Upload!
                </button> 
            </div>
        </div>
    );
}


export default FileUpload;
